<script setup>
import ProjectBadge from "@/components/projects/ProjectBadge.vue";
import ProjectTech from "@/components/projects/ProjectTech.vue";
import ProjectHighlights from "@/components/projects/ProjectHighlights.vue";
import ProjectActions from "@/components/projects/ProjectActions.vue";

import {
    X,
    ExternalLink,
} from "lucide-vue-next";

defineProps({
    show: {
        type: Boolean,
        default: false,
    },

    project: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits([
    "close",
]);

function closeModal() {
    emit("close");
}
</script>

<template>

    <Teleport to="body">

        <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">

            <div v-if="show" class="
                    fixed
                    inset-0
                    z-50
                    overflow-y-auto
                    bg-black/80
                    p-4
                    backdrop-blur-md
                    sm:p-6
                    lg:p-8
                " @click.self="closeModal">

                <!-- ================================================= -->
                <!-- Modal Container -->
                <!-- ================================================= -->

                <div class="
                        relative
                        mx-auto
                        my-4
                        max-w-5xl
                        overflow-hidden
                        rounded-3xl
                        border
                        border-slate-800
                        bg-slate-900
                        shadow-2xl
                        shadow-black/50
                        sm:my-8
                        lg:my-12
                    " @click.stop>

                    <!-- ================================================= -->
                    <!-- Close Button -->
                    <!-- ================================================= -->

                    <button type="button" title="Close project details" class="
                            absolute
                            right-4
                            top-4
                            z-30
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-slate-950/75
                            text-slate-300
                            shadow-lg
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:border-cyan-400/30
                            hover:bg-cyan-500
                            hover:text-slate-950
                        " @click="closeModal">

                        <X class="h-5 w-5" />

                    </button>

                    <!-- ================================================= -->
                    <!-- Hero Image -->
                    <!-- ================================================= -->

                    <div class="group relative">

                        <div class="
                                relative
                                h-64
                                overflow-hidden
                                bg-slate-950
                                sm:h-80
                                lg:h-[420px]
                            ">

                            <img :src="project?.image" :alt="`${project?.title || 'Project'} preview`" class="
                                    h-full
                                    w-full
                                    object-cover
                                    object-top
                                    transition-transform
                                    duration-700
                                    group-hover:scale-[1.02]
                                " />

                            <!-- Image Gradient -->

                            <div class="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-slate-950
                                    via-slate-950/30
                                    to-transparent
                                "></div>

                            <!-- Top Highlight -->

                            <div class="
                                    pointer-events-none
                                    absolute
                                    inset-x-0
                                    top-0
                                    h-24
                                    bg-gradient-to-b
                                    from-black/30
                                    to-transparent
                                "></div>

                            <!-- Project Type -->

                            <div v-if="project?.type" class="
                                    absolute
                                    bottom-5
                                    left-5
                                    z-20
                                ">

                                <ProjectBadge :text="project.type" />

                            </div>

                        </div>

                    </div>

                    <!-- ================================================= -->
                    <!-- Content -->
                    <!-- ================================================= -->

                    <div class="
                            space-y-8
                            p-6
                            sm:p-8
                            lg:p-10
                        ">

                        <!-- ================================================= -->
                        <!-- Header -->
                        <!-- ================================================= -->

                        <div class="
                                flex
                                flex-wrap
                                items-start
                                justify-between
                                gap-4
                            ">

                            <div class="min-w-0">

                                <h2 class="
                                        text-3xl
                                        font-bold
                                        leading-tight
                                        tracking-tight
                                        text-white
                                        sm:text-4xl
                                    ">
                                    {{ project?.title }}
                                </h2>

                                <p class="
                                        mt-3
                                        text-base
                                        font-medium
                                        text-cyan-400
                                        sm:text-lg
                                    ">
                                    {{ project?.company }}
                                </p>

                                <div class="
                                        mt-2
                                        flex
                                        flex-wrap
                                        items-center
                                        gap-x-2
                                        gap-y-1
                                        text-sm
                                        text-slate-500
                                    ">

                                    <span>
                                        {{ project?.role }}
                                    </span>

                                    <span class="text-slate-700">
                                        •
                                    </span>

                                    <span>
                                        {{ project?.year }}
                                    </span>

                                </div>

                            </div>

                            <!-- Status -->

                            <span v-if="project?.status" class="
                                    inline-flex
                                    shrink-0
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-cyan-500/20
                                    bg-cyan-500/10
                                    px-4
                                    py-2
                                    text-xs
                                    font-semibold
                                    text-cyan-400
                                ">

                                <span class="
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-emerald-400
                                        shadow-sm
                                        shadow-emerald-400/50
                                    "></span>

                                {{ project.status }}

                            </span>

                        </div>

                        <!-- ================================================= -->
                        <!-- Divider -->
                        <!-- ================================================= -->

                        <div class="
                                h-px
                                w-full
                                bg-gradient-to-r
                                from-slate-800
                                via-slate-800
                                to-transparent
                            "></div>

                        <!-- ================================================= -->
                        <!-- Description -->
                        <!-- ================================================= -->

                        <div>

                            <h3 class="
                                    mb-3
                                    text-lg
                                    font-semibold
                                    text-white
                                ">
                                About Project
                            </h3>

                            <p class="
                                    max-w-4xl
                                    leading-8
                                    text-slate-400
                                ">
                                {{ project?.description }}
                            </p>

                        </div>

                        <!-- ================================================= -->
                        <!-- Technologies -->
                        <!-- ================================================= -->

                        <div>

                            <ProjectTech :technologies="project?.technologies || []" />

                        </div>

                        <!-- ================================================= -->
                        <!-- Highlights -->
                        <!-- ================================================= -->

                        <div>

                            <ProjectHighlights :highlights="project?.responsibilities || []" />

                        </div>

                        <!-- ================================================= -->
                        <!-- Actions -->
                        <!-- ================================================= -->

                        <div class="
                                flex
                                flex-col
                                gap-4
                                border-t
                                border-slate-800
                                pt-6
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            ">

                            <div class="
                                    text-sm
                                    text-slate-500
                                ">
                                Project Links
                            </div>

                            <ProjectActions :github="project?.github" :demo="project?.demo" />

                        </div>

                    </div>

                </div>

            </div>

        </Transition>

    </Teleport>

</template>