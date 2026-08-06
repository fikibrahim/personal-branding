<script setup>
import ProjectBadge from "./ProjectBadge.vue";
import ProjectTech from "./ProjectTech.vue";
import ProjectHighlights from "./ProjectHighlights.vue";
import FeaturedStats from "@/components/projects/FeaturedStats.vue";

defineProps({

    project: {
        type: Object,
        required: true,
    }

});
</script>

<template>

    <div class="space-y-6">

        <ProjectBadge :text="project.type" />

        <div>

            <h3 class="
                    text-2xl
                    font-bold
                    text-white
                ">
                {{ project.title }}
            </h3>

            <p class="
                    mt-1
                    text-cyan-400
                    text-sm
                ">
                {{ project.company }}
            </p>

            <p class="
                    mt-2
                    text-sm
                    text-slate-500
                ">
                {{ project.role }}
                •
                {{ project.year }}
            </p>

        </div>

        <p class="
                leading-7
                text-slate-400
            ">
            {{ project.description }}
        </p>

        <ProjectTech :technologies="project.technologies" />

        <FeaturedStats :stats="project.stats" />

        <ProjectHighlights :highlights="project.responsibilities" />

    </div>

</template>