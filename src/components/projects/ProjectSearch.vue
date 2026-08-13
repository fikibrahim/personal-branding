<script setup>
import { Search, X } from "lucide-vue-next";

defineProps({
    modelValue: {
        type: String,
        default: "",
    },
});

const emit = defineEmits([
    "update:modelValue",
]);

function updateSearch(event) {
    emit("update:modelValue", event.target.value);
}

function clearSearch() {
    emit("update:modelValue", "");
}
</script>

<template>

    <div class="relative w-full">

        <!-- Search Icon -->

        <Search class="
                pointer-events-none
                absolute
                left-4
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                text-slate-500
                transition-colors
                duration-300
                peer-focus:text-cyan-400
            " />

        <!-- Input -->

        <input :value="modelValue" type="text" placeholder="Search project, technology, company..." autocomplete="off"
            class="
                peer
                w-full
                rounded-2xl
                border
                border-slate-700
                bg-slate-900
                py-3.5
                pl-12
                pr-12
                text-sm
                text-white
                outline-none
                transition-all
                duration-300
                placeholder:text-slate-500
                hover:border-slate-600
                focus:border-cyan-500/60
                focus:bg-slate-900/90
                focus:ring-2
                focus:ring-cyan-500/20
            " @input="updateSearch" />

        <!-- Clear -->

        <button v-if="modelValue" type="button" aria-label="Clear search" class="
                absolute
                right-3
                top-1/2
                flex
                h-8
                w-8
                -translate-y-1/2
                items-center
                justify-center
                rounded-lg
                text-slate-500
                transition-all
                duration-200
                hover:bg-slate-800
                hover:text-cyan-400
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-400/30
            " @click="clearSearch">

            <X class="h-4 w-4" />

        </button>

    </div>

</template>