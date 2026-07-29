<script setup>
import {
    ref,
    watch,
} from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },

    level: {
        type: Number,
        required: true,
    },

    animate: {
        type: Boolean,
        default: false,
    },


});

const currentLevel = ref(0);

function animateProgress(target) {

    let start = null;
    const duration = 1200;

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {

        if (!start) start = timestamp;

        const progress = Math.min(
            (timestamp - start) / duration,
            1
        );

        currentLevel.value = Math.round(
            easeOutCubic(progress) * target
        );

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

watch(

    () => props.animate,

    (value) => {

        console.log("Animate:", props.name, value);

        if (!value) return;

        animateProgress(props.level);

    },

    {
        immediate: true,
    }

);

</script>

<template>

    <div class="space-y-2">

        <div class="flex items-center justify-between">

            <span class="
                    text-sm
                    font-medium
                    text-slate-300
                ">
                {{ name }}
            </span>

            <span class="
                    text-xs
                    font-semibold
                    text-cyan-400
                ">
                {{ currentLevel }}%
            </span>

        </div>

        <div class="
                h-2
                overflow-hidden
                rounded-full
                bg-slate-800
            ">

            <div class="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    transition-all
                    duration-300
                " :style="{
                    width: currentLevel + '%'
                }" />

        </div>

    </div>

</template>