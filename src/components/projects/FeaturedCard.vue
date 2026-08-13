<script setup>
import FeaturedImage from "@/components/projects/FeaturedImage.vue";
import ProjectBadge from "@/components/projects/ProjectBadge.vue";
import ProjectTech from "@/components/projects/ProjectTech.vue";
import ProjectActions from "@/components/projects/ProjectActions.vue";
import FeaturedStats from "@/components/projects/FeaturedStats.vue";

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits([
    "view",
]);

function openProject() {
    emit("view", props.project);
}
</script>

<template>

    <article class="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-slate-900
            shadow-xl
            shadow-black/20
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-cyan-500/30
            hover:shadow-2xl
            hover:shadow-cyan-500/10
        ">

        <!-- ========================================================= -->
        <!-- Card Glow -->
        <!-- ========================================================= -->

        <div class="
                pointer-events-none
                absolute
                -inset-px
                rounded-3xl
                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-transparent
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
            "></div>

        <!-- ========================================================= -->
        <!-- Content -->
        <!-- ========================================================= -->

        <div class="relative grid lg:grid-cols-2">

            <!-- ===================================================== -->
            <!-- LEFT — Browser Preview -->
            <!-- ===================================================== -->

            <div class="
                    relative
                    p-3
                    sm:p-4
                    lg:p-5
                ">

                <FeaturedImage :image="project.image" :title="project.title" :demo="project.demo" />

            </div>

            <!-- ===================================================== -->
            <!-- RIGHT — Project Information -->
            <!-- ===================================================== -->

            <div class="
                    flex
                    flex-col
                    justify-between
                    p-6
                    sm:p-8
                    lg:p-10
                ">

                <div class="space-y-6">

                    <!-- ================================================= -->
                    <!-- Header -->
                    <!-- ================================================= -->

                    <div class="
                            flex
                            flex-wrap
                            items-center
                            justify-between
                            gap-3
                        ">

                        <ProjectBadge text="⭐ Featured Project" />

                        <span class="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-cyan-500/20
                                bg-cyan-500/10
                                px-4
                                py-1.5
                                text-xs
                                font-semibold
                                text-cyan-400
                                transition-all
                                duration-300
                                group-hover:border-cyan-500/30
                                group-hover:bg-cyan-500/15
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
                    <!-- Title -->
                    <!-- ================================================= -->

                    <div>

                        <h2 class="
                                text-3xl
                                font-bold
                                leading-tight
                                tracking-tight
                                text-white
                                transition-colors
                                duration-300
                                sm:text-4xl
                                group-hover:text-cyan-400
                            ">
                            {{ project.title }}
                        </h2>

                        <p class="
                                mt-3
                                text-base
                                font-medium
                                text-cyan-400
                            ">
                            {{ project.company }}
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
                                {{ project.role }}
                            </span>

                            <span class="text-slate-700">
                                •
                            </span>

                            <span>
                                {{ project.year }}
                            </span>

                        </div>

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

                        <p class="
                                line-clamp-3
                                leading-7
                                text-slate-400
                            ">
                            {{ project.description }}
                        </p>

                    </div>

                    <!-- ================================================= -->
                    <!-- Technologies -->
                    <!-- ================================================= -->

                    <div>

                        <ProjectTech :technologies="project.technologies.slice(0, 5)" />

                    </div>

                    <!-- ================================================= -->
                    <!-- Stats -->
                    <!-- ================================================= -->

                    <div v-if="project.stats" class="
                            rounded-2xl
                            border
                            border-slate-800
                            bg-slate-950/40
                            p-4
                            transition-all
                            duration-300
                            group-hover:border-slate-700
                        ">

                        <FeaturedStats :stats="project.stats" />

                    </div>

                </div>

                <!-- ===================================================== -->
                <!-- Footer -->
                <!-- ===================================================== -->

                <div class="
                        mt-8
                        flex
                        flex-wrap
                        items-center
                        justify-between
                        gap-4
                        border-t
                        border-slate-800
                        pt-6
                    ">

                    <!-- View Details -->

                    <button type="button" class="
                            group/button
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-cyan-500
                            px-6
                            py-3
                            font-semibold
                            text-slate-950
                            shadow-lg
                            shadow-cyan-500/10
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-cyan-400
                            hover:shadow-cyan-500/20
                            active:translate-y-0
                        " @click="openProject">

                        <span>
                            View Details
                        </span>

                        <span class="
                                transition-transform
                                duration-300
                                group-hover/button:translate-x-0.5
                            ">
                            →
                        </span>

                    </button>

                    <!-- GitHub / Demo -->

                    <div @click.stop>

                        <ProjectActions :github="project.github" :demo="project.demo" />

                    </div>

                </div>

            </div>

        </div>

    </article>

</template>