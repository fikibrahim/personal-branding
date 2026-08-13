<script setup>
import { computed } from "vue";
import {
    LockKeyhole,
    ExternalLink,
    ArrowLeft,
    ArrowRight,
    RotateCw,
} from "lucide-vue-next";

const props = defineProps({
    image: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    demo: {
        type: String,
        default: "",
    },
});

/*
|--------------------------------------------------------------------------
| Browser URL
|--------------------------------------------------------------------------
*/

const browserUrl = computed(() => {
    if (!props.demo) {
        return props.title;
    }

    try {
        const url = new URL(props.demo);

        return url.hostname.replace(/^www\./, "");
    } catch {
        return props.demo;
    }
});

/*
|--------------------------------------------------------------------------
| Open Demo
|--------------------------------------------------------------------------
*/

function openDemo() {
    if (!props.demo) {
        return;
    }

    window.open(
        props.demo,
        "_blank",
        "noopener,noreferrer"
    );
}
</script>

<template>

    <div class="group relative">

        <!-- ========================================================= -->
        <!-- Browser Glow -->
        <!-- ========================================================= -->

        <div class="
                absolute
                -inset-4
                -z-10
                rounded-[2.5rem]
                bg-cyan-500/10
                opacity-50
                blur-3xl
                transition-all
                duration-700
                group-hover:bg-cyan-400/15
                group-hover:opacity-100
            "></div>

        <!-- ========================================================= -->
        <!-- Browser Window -->
        <!-- ========================================================= -->

        <div class="
                overflow-hidden
                rounded-3xl
                border
                border-slate-700/80
                bg-slate-950
                shadow-2xl
                shadow-black/50
                transition-all
                duration-500
                group-hover:-translate-y-1
                group-hover:border-cyan-500/30
                group-hover:shadow-cyan-500/10
            ">

            <!-- ===================================================== -->
            <!-- Browser Toolbar -->
            <!-- ===================================================== -->

            <div class="
                    flex
                    h-14
                    items-center
                    gap-3
                    border-b
                    border-slate-800
                    bg-slate-950
                    px-4
                ">

                <!-- Traffic Lights -->

                <div class="
                        flex
                        shrink-0
                        items-center
                        gap-2
                    ">

                    <span class="
                            h-3
                            w-3
                            rounded-full
                            bg-red-500
                            shadow-sm
                            shadow-red-500/30
                        "></span>

                    <span class="
                            h-3
                            w-3
                            rounded-full
                            bg-yellow-500
                            shadow-sm
                            shadow-yellow-500/30
                        "></span>

                    <span class="
                            h-3
                            w-3
                            rounded-full
                            bg-green-500
                            shadow-sm
                            shadow-green-500/30
                        "></span>

                </div>

                <!-- Navigation -->

                <div class="
                        hidden
                        items-center
                        gap-1
                        sm:flex
                    ">

                    <button type="button" class="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-lg
                            text-slate-600
                        " aria-label="Back">
                        <ArrowLeft :size="14" />
                    </button>

                    <button type="button" class="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-lg
                            text-slate-600
                        " aria-label="Forward">
                        <ArrowRight :size="14" />
                    </button>

                    <button type="button" class="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-lg
                            text-slate-500
                            transition
                            hover:bg-slate-800
                            hover:text-slate-300
                        " aria-label="Reload">
                        <RotateCw :size="13" />
                    </button>

                </div>

                <!-- Address Bar -->

                <div class="
                        flex
                        min-w-0
                        flex-1
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-900/80
                        px-3
                        py-2
                        shadow-inner
                        shadow-black/20
                    ">

                    <LockKeyhole v-if="demo" :size="13" class="
                            shrink-0
                            text-emerald-400
                        " />

                    <span class="
                            min-w-0
                            truncate
                            text-xs
                            text-slate-400
                        ">
                        {{ browserUrl }}
                    </span>

                </div>

                <!-- External Link -->

                <button v-if="demo" type="button" title="Open live project" aria-label="Open live project" class="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-slate-500
                        transition-all
                        duration-200
                        hover:bg-slate-800
                        hover:text-cyan-400
                    " @click.stop="openDemo">
                    <ExternalLink :size="15" />
                </button>

            </div>

            <!-- ===================================================== -->
            <!-- Screenshot -->
            <!-- ===================================================== -->

            <div class="
                    relative
                    h-[280px]
                    overflow-hidden
                    bg-slate-900
                    sm:h-[320px]
                    lg:h-[360px]
                ">

                <!-- Image -->

                <img :src="image" :alt="`${title} project preview`" loading="lazy" class="
                        h-full
                        w-full
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.035]
                    " />

                <!-- Top Highlight -->

                <div class="
                        pointer-events-none
                        absolute
                        inset-x-0
                        top-0
                        h-24
                        bg-gradient-to-b
                        from-white/5
                        to-transparent
                    "></div>

                <!-- Main Overlay -->

                <div class="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-950/60
                        via-transparent
                        to-slate-950/10
                    "></div>

                <!-- Bottom Fade -->

                <div class="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        h-24
                        bg-gradient-to-t
                        from-slate-950/50
                        to-transparent
                    "></div>

                <!-- Live Preview -->

                <div v-if="demo" class="
                        absolute
                        bottom-4
                        left-4
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
                        font-medium
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

                    Live Preview

                </div>

            </div>

        </div>

    </div>

</template>