<script setup>
defineProps({
    stats: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <div v-if="stats.length" class="grid min-w-0 grid-cols-3 gap-2 sm:gap-3">
        <div v-for="(item, index) in stats" :key="index" class="
                group
                min-w-0
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/60
                p-3
                text-center
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-500/30
                hover:bg-slate-800/80
                hover:shadow-lg
                hover:shadow-cyan-500/10
                sm:p-4
            ">
            <!-- Value -->
            <h3 class="
                    whitespace-nowrap
                    text-lg
                    font-extrabold
                    leading-tight
                    text-white
                    transition
                    duration-300
                    group-hover:scale-105
                    group-hover:text-cyan-400
                    sm:text-xl
                    lg:text-2xl
                ">
                {{ item.value }}
            </h3>

            <!-- Label -->
            <p class="
                    mt-2
                    text-xs
                    leading-4
                    tracking-wide
                    text-slate-400
                    sm:text-sm
                    sm:leading-5
                ">
                {{ item.label }}
            </p>
        </div>
    </div>
</template>