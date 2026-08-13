<script setup>
import { CircleCheck } from "lucide-vue-next";

defineProps({
    highlights: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>

    <div v-if="highlights.length">

        <!-- Heading -->

        <h4 class="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-slate-300
            ">
            Key Highlights
        </h4>

        <!-- Highlights -->

        <ul class="space-y-3">

            <li v-for="item in highlights" :key="item" class="
                    group/highlight
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-transparent
                    px-3
                    py-2
                    text-sm
                    leading-6
                    text-slate-400
                    transition-all
                    duration-300
                    hover:border-slate-800
                    hover:bg-slate-950/40
                    hover:text-slate-300
                ">

                <!-- Icon -->

                <span class="
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-cyan-500/10
                        text-cyan-400
                        transition-all
                        duration-300
                        group-hover/highlight:bg-cyan-500/20
                        group-hover/highlight:text-cyan-300
                    ">

                    <CircleCheck class="h-3.5 w-3.5" />

                </span>

                <!-- Text -->

                <span class="flex-1">
                    {{ item }}
                </span>

            </li>

        </ul>

    </div>

</template>