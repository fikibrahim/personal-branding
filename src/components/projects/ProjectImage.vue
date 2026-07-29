<script setup>

defineProps({

    image: String,

    title: String,

});

</script>

<template>

    <div
        class="
            group
            relative
            overflow-hidden
            rounded-t-2xl
            cursor-pointer
        "
    >

        <!-- Image -->

        <img
            :src="image"
            :alt="title"
            class="
                aspect-video
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
            "
        >

        <!-- Overlay -->

        <div
            class="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-slate-950/60
                opacity-0
                transition-all
                duration-500
                group-hover:opacity-100
            "
        >

            <span
                class="
                    rounded-full
                    border
                    border-cyan-400/50
                    bg-slate-900/70
                    px-5
                    py-2
                    text-sm
                    font-medium
                    text-cyan-300
                    backdrop-blur-sm
                "
            >
                🔍 View Project
            </span>

        </div>

    </div>

</template>