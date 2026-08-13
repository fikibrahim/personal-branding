<script setup>
import ProjectBadge from "./ProjectBadge.vue";
import ProjectTech from "./ProjectTech.vue";
import ProjectHighlights from "./ProjectHighlights.vue";
import FeaturedStats from "@/components/projects/FeaturedStats.vue";

defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>

<template>

    <div class="space-y-6">

        <!-- ========================================================= -->
        <!-- Project Type -->
        <!-- ========================================================= -->

        <ProjectBadge :text="project.type" />

        <!-- ========================================================= -->
        <!-- Project Information -->
        <!-- ========================================================= -->

        <div>

            <h3 class="
                    text-2xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-cyan-400
                ">
                {{ project.title }}
            </h3>

            <p class="
                    mt-2
                    text-sm
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
                    text-xs
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

        <!-- ========================================================= -->
        <!-- Divider -->
        <!-- ========================================================= -->

        <div class="
                h-px
                w-full
                bg-gradient-to-r
                from-slate-800
                via-slate-800
                to-transparent
            "></div>

        <!-- ========================================================= -->
        <!-- Description -->
        <!-- ========================================================= -->

        <p class="
                line-clamp-3
                text-sm
                leading-7
                text-slate-400
            ">
            {{ project.description }}
        </p>

        <!-- ========================================================= -->
        <!-- Technologies -->
        <!-- ========================================================= -->

        <ProjectTech :technologies="project.technologies" />

        <!-- ========================================================= -->
        <!-- Featured Stats -->
        <!-- ========================================================= -->

        <div v-if="project.stats" class="
                rounded-2xl
                border
                border-slate-800
                bg-slate-950/30
                p-4
            ">

            <FeaturedStats :stats="project.stats" />

        </div>

        <!-- ========================================================= -->
        <!-- Highlights -->
        <!-- ========================================================= -->

        <ProjectHighlights :highlights="project.responsibilities" />

    </div>

</template>