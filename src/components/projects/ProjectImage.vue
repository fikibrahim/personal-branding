<script setup>
defineProps({
    image: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        default: "",
    },
});
</script>

<template>

    <div class="
            group
            relative
            overflow-hidden
            rounded-t-2xl
            bg-slate-950
            cursor-pointer
        ">

        <!-- ========================================================= -->
        <!-- Image -->
        <!-- ========================================================= -->

        <div class="
                relative
                aspect-video
                overflow-hidden
                bg-slate-900
            ">

            <img :src="image" :alt="`${title} project preview`" loading="lazy" class="
                    h-full
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.045]
                " />

            <!-- ===================================================== -->
            <!-- Image Overlay -->
            <!-- ===================================================== -->

            <div class="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/60
                    via-transparent
                    to-slate-950/10
                "></div>

            <!-- Top Highlight -->

            <div class="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-20
                    bg-gradient-to-b
                    from-white/5
                    to-transparent
                "></div>

            <!-- ===================================================== -->
            <!-- Status -->
            <!-- ===================================================== -->

            <div v-if="status" class="
                    absolute
                    right-4
                    top-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-slate-950/70
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    text-slate-300
                    shadow-lg
                    backdrop-blur-md
                ">

                <span class="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-emerald-400
                        shadow-sm
                        shadow-emerald-400/50
                    "></span>

                {{ status }}

            </div>

            <!-- ===================================================== -->
            <!-- Hover View Project -->
            <!-- ===================================================== -->

            <div class="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-slate-950/45
                    opacity-0
                    backdrop-blur-[2px]
                    transition-all
                    duration-500
                    group-hover:opacity-100
                ">

                <span class="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-cyan-400/30
                        bg-slate-950/80
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-cyan-300
                        shadow-xl
                        shadow-black/20
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover:scale-100
                    ">

                    <span>
                        🔍
                    </span>

                    <span>
                        View Project
                    </span>

                </span>

            </div>

        </div>

    </div>

</template>