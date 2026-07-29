<script setup>
import SectionTitle from "@/components/common/SectionTitle.vue";
import ProjectCard from "@/components/projects/ProjectCard.vue";

import { projects } from "@/data/projects";
import SectionWrapper from "../common/SectionWrapper.vue";
import AppContainer from "../common/AppContainer.vue";
</script>

<template>

    <SectionWrapper>
        <AppContainer>

            <section id="projects" class="py-24">

                <SectionTitle badge="Portfolio" title="Featured Projects"
                    description="A collection of projects I have built throughout my career as a Frontend Developer, Mobile Developer, Full Stack Developer, and Programming Instructor." />

                <div class="
                mt-16
                grid
                gap-8
                md:grid-cols-2
            ">

                    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />

                </div>

            </section>

        </AppContainer>
    </SectionWrapper>

</template>