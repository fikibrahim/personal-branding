<script setup>
import { computed } from "vue";

import FeaturedCard from "@/components/projects/FeaturedCard.vue";
import { projects } from "@/data/projects";
import FeaturedImage from "@/components/projects/FeaturedImage.vue";

const emit = defineEmits([
    "view",
]);

/*
|--------------------------------------------------------------------------
| Featured Projects
|--------------------------------------------------------------------------
*/

const featuredProjects = computed(() =>
    projects.filter(project => project.featured)
);
</script>

<template>

    <section class="mb-24">

        <FeaturedImage v-for="project in featuredProjects" :key="project.id" :project="project"
            @click="emit('view', project)" />

        <!-- Header -->

        <div class="mb-10">

            <span class="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-cyan-500/30
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-cyan-400
                ">
                ⭐ Featured Projects
            </span>

            <h2 class="
                    mt-5
                    text-4xl
                    font-bold
                    text-white
                ">
                Selected Works
            </h2>

            <p class="
                    mt-3
                    max-w-2xl
                    leading-7
                    text-slate-400
                ">
                A selection of projects that best represent my experience,
                technical skills, and problem-solving approach.
            </p>

        </div>

        <!-- Cards -->

        <div class="
                grid
                gap-8
                lg:grid-cols-2
            ">

            <FeaturedCard v-for="project in featuredProjects" :key="project.id" :project="project"
                @view="emit('view', project)" />

        </div>

    </section>

</template>