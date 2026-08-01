<script setup>
import { ref, computed } from "vue";

import SectionWrapper from "@/components/common/SectionWrapper.vue";
import AppContainer from "@/components/common/AppContainer.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";

import ProjectCard from "@/components/projects/ProjectCard.vue";
import ProjectFilter from "@/components/projects/ProjectFilter.vue";
import ProjectModal from "@/components/projects/ProjectModal.vue";

import { projects } from "@/data/projects";

import {
    LayoutGrid,
    BriefcaseBusiness,
    User,
    Globe,
    Smartphone,
} from "lucide-vue-next";

/*
|--------------------------------------------------------------------------
| Project Filter
|--------------------------------------------------------------------------
*/

const selectedFilter = ref("All");

const filters = [

    {
        label: "All",
        value: "All",
        icon: LayoutGrid,
    },

    {
        label: "Professional",
        value: "Professional",
        icon: BriefcaseBusiness,
    },

    {
        label: "Personal",
        value: "Personal",
        icon: User,
    },

    {
        label: "Web",
        value: "Web",
        icon: Globe,
    },

    {
        label: "Mobile",
        value: "Mobile",
        icon: Smartphone,
    },

];

/*
|--------------------------------------------------------------------------
| Filter Counter
|--------------------------------------------------------------------------
*/

const filterCounts = computed(() => ({

    All: projects.length,

    Professional: projects.filter(
        project => project.type === "Professional Project"
    ).length,

    Personal: projects.filter(
        project => project.type === "Personal Project"
    ).length,

    Web: projects.filter(project =>
        [
            "Web Development",
            "Frontend Development",
            "Full Stack Development",
        ].includes(project.category)
    ).length,

    Mobile: projects.filter(
        project => project.category === "Mobile Development"
    ).length,

}));

/*
|--------------------------------------------------------------------------
| Filtered Projects
|--------------------------------------------------------------------------
*/

const filteredProjects = computed(() => {

    switch (selectedFilter.value) {

        case "Professional":
            return projects.filter(
                project => project.type === "Professional Project"
            );

        case "Personal":
            return projects.filter(
                project => project.type === "Personal Project"
            );

        case "Web":
            return projects.filter(project =>
                [
                    "Web Development",
                    "Frontend Development",
                    "Full Stack Development",
                ].includes(project.category)
            );

        case "Mobile":
            return projects.filter(
                project => project.category === "Mobile Development"
            );

        default:
            return projects;

    }

});

/*
|--------------------------------------------------------------------------
| Project Modal
|--------------------------------------------------------------------------
*/

const selectedProject = ref(null);

const showModal = ref(false);

function openProject(project) {

    selectedProject.value = project;

    showModal.value = true;

}

function closeProject() {

    showModal.value = false;

    selectedProject.value = null;

}
</script>

<template>

    <SectionWrapper id="projects">

        <AppContainer>

            <SectionTitle badge="Portfolio" title="Featured Projects"
                description="A collection of projects I have built throughout my career as a Frontend Developer, Mobile Developer, Full Stack Developer, and Programming Instructor." />

            <ProjectFilter v-model="selectedFilter" :filters="filters" :counts="filterCounts" />

            <div class="
                    mt-16
                    grid
                    gap-8
                    lg:grid-cols-2
                ">

                <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project"
                    @view="openProject" />

            </div>

            <ProjectModal :show="showModal" :project="selectedProject" @close="closeProject" />

        </AppContainer>

    </SectionWrapper>

</template>