<script setup>
import {
    ref,
    computed,
    onMounted,
    onUnmounted,
    watch,
} from "vue";

import { codeSnippets } from "@/data/heroCode";

const currentIndex = ref(0);

const snippet = computed(() => codeSnippets[currentIndex.value]);

const displayedCode = ref([]);

const cursorVisible = ref(true);

let cursorTimer = null;
let switchTimer = null;
let typingIntervals = [];

// =========================
// Typing Animation
// =========================

function clearTyping() {
    typingIntervals.forEach(clearInterval);
    typingIntervals = [];
}

function typeCode(lines) {
    clearTyping();

    displayedCode.value = [];

    let lineIndex = 0;

    function typeNextLine() {
        if (lineIndex >= lines.length) return;

        const currentLine = lines[lineIndex];

        displayedCode.value.push("");

        // Empty line
        if (currentLine.length === 0) {
            lineIndex++;

            setTimeout(typeNextLine, 120);

            return;
        }

        let charIndex = 0;

        const interval = setInterval(() => {
            displayedCode.value[lineIndex] += currentLine[charIndex];

            charIndex++;

            if (charIndex >= currentLine.length) {
                clearInterval(interval);

                lineIndex++;

                setTimeout(typeNextLine, 120);
            }
        }, 20);

        typingIntervals.push(interval);
    }

    typeNextLine();
}

// =========================
// Lifecycle
// =========================

onMounted(() => {
    typeCode(snippet.value.code);

    cursorTimer = setInterval(() => {
        cursorVisible.value = !cursorVisible.value;
    }, 500);

    switchTimer = setInterval(() => {
        currentIndex.value =
            (currentIndex.value + 1) % codeSnippets.length;
    }, 4000);
});

watch(currentIndex, () => {
    typeCode(snippet.value.code);
});

onUnmounted(() => {
    clearInterval(switchTimer);
    clearInterval(cursorTimer);

    clearTyping();
});
</script>

<template>
    <div class="
            mt-8
            w-full
            max-w-lg
            overflow-hidden
            rounded-2xl
            border
            border-slate-700/50
            bg-slate-900
            shadow-2xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-cyan-500/10
        ">

        <!-- Header -->

        <div class="
                flex
                items-center
                justify-between
                border-b
                border-slate-700
                px-3
                py-3
                sm:px-4
            ">

            <div class="flex items-center gap-2">
                <span class="h-3 w-3 rounded-full bg-red-500"></span>
                <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span class="h-3 w-3 rounded-full bg-green-500"></span>
            </div>

            <span class="text-xs text-slate-400 sm:text-sm">
                VS Code
            </span>

            <div class="w-8 sm:w-12"></div>

        </div>

        <!-- Tabs -->

        <div class="
                overflow-x-auto
                border-b
                border-slate-700
                bg-slate-950
            ">

            <div class="flex min-w-max">

                <button v-for="(item, index) in codeSnippets" :key="index" type="button" @click="currentIndex = index"
                    class="
                        flex
                        shrink-0
                        items-center
                        gap-2
                        border-r
                        border-slate-700
                        px-3
                        py-2
                        text-xs
                        transition-all
                        duration-300
                        sm:gap-3
                        sm:px-4
                        sm:text-sm
                    " :class="currentIndex === index
                            ? 'bg-slate-800 text-cyan-400'
                            : 'text-slate-500 hover:bg-slate-800 hover:text-white'
                        ">

                    <span v-if="item.icon === 'js'">🟨</span>
                    <span v-if="item.icon === 'php'">🐘</span>
                    <span v-if="item.icon === 'vue'">💚</span>

                    {{ item.file }}

                </button>

            </div>

        </div>

        <!-- Body -->

        <div class="
                h-60
                overflow-x-auto
                p-4
                font-mono
                text-xs
                leading-7
                sm:p-5
                sm:text-sm
            ">

            <div class="min-w-max">

                <div v-for="(line, index) in displayedCode" :key="index" class="flex gap-3 sm:gap-4">

                    <!-- Line Number -->

                    <span class="
                            w-5
                            shrink-0
                            select-none
                            text-right
                            text-slate-500
                        ">
                        {{ index + 1 }}
                    </span>

                    <!-- Code -->

                    <div class="flex items-center">

                        <span class="whitespace-pre text-slate-300">
                            {{ line }}
                        </span>

                        <span v-if="
                            index === displayedCode.length - 1 &&
                            cursorVisible
                        " class="
                                ml-0.5
                                h-5
                                w-[2px]
                                shrink-0
                                bg-cyan-400
                            "></span>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>