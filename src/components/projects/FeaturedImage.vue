<script setup>
defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>

<template>

    <div class="relative overflow-hidden rounded-3xl">

        <img :src="project.image" :alt="project.title" class="
            w-full
            rounded-3xl
            object-cover
            transition
            duration-700
            hover:scale-105
        ">

        <div class="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/90
            via-transparent
            to-transparent
        " />

        <span class="
            absolute
            left-5
            top-5
            rounded-full
            bg-cyan-500
            px-4
            py-1
            text-xs
            font-semibold
            text-slate-950
        ">
            ⭐ Featured
        </span>

    </div>

</template>