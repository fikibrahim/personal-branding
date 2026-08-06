<script setup>
defineProps({

    stats: {
        type: Array,
        default: () => [],
    },

});
</script>

<template>

    <div v-if="stats.length" class="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-3
        ">

        <div v-for="(item, index) in stats" :key="index" class="
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/60
                p-6
                text-center
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-500/30
                hover:bg-slate-800/80
                hover:shadow-lg
                hover:shadow-cyan-500/10
            ">

            <h3 class="
                    text-3xl
                    font-extrabold
                    text-white
                    transition
                    duration-300
                    group-hover:scale-110
                    group-hover:text-cyan-400
                ">
                {{ item.value }}
            </h3>

            <p class="
                    mt-2
                    text-sm
                    tracking-wide
                    text-slate-400
                ">
                {{ item.label }}
            </p>

        </div>

    </div>

</template>