<script setup>
import { ref, computed } from "vue";

import SectionWrapper from "@/components/common/SectionWrapper.vue";
import AppContainer from "@/components/common/AppContainer.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";

import ProjectCard from "@/components/projects/ProjectCard.vue";
import ProjectFilter from "@/components/projects/ProjectFilter.vue";
import ProjectModal from "@/components/projects/ProjectModal.vue";
import ProjectSearch from "@/components/projects/ProjectSearch.vue";
import ProjectSort from "@/components/projects/ProjectSort.vue";

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
const searchQuery = ref("");
const selectedSort = ref("Newest");

const projectCount = computed(() => ({
    showing: filteredProjects.value.length,
    total: projects.length,
}));

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

    // ==========================
    // Filter
    // ==========================

    let result = [...projects];

    switch (selectedFilter.value) {

        case "Professional":
            result = result.filter(
                project => project.type === "Professional Project"
            );
            break;

        case "Personal":
            result = result.filter(
                project => project.type === "Personal Project"
            );
            break;

        case "Web":
            result = result.filter(project =>
                [
                    "Web Development",
                    "Frontend Development",
                    "Full Stack Development",
                ].includes(project.category)
            );
            break;

        case "Mobile":
            result = result.filter(
                project => project.category === "Mobile Development"
            );
            break;

    }

    // ==========================
    // Search
    // ==========================

    if (searchQuery.value.trim()) {

        const keyword = searchQuery.value.toLowerCase();

        result = result.filter(project => {

            return (

                project.title.toLowerCase().includes(keyword) ||

                project.company.toLowerCase().includes(keyword) ||

                project.role.toLowerCase().includes(keyword) ||

                project.category.toLowerCase().includes(keyword) ||

                project.description.toLowerCase().includes(keyword) ||

                project.technologies.some(tech =>
                    tech.toLowerCase().includes(keyword)
                )

            );

        });

    }

    // ==========================
    // Sort
    // ==========================

    switch (selectedSort.value) {

        case "Newest":

            result.sort((a, b) => {

                const yearA = parseInt(a.year);

                const yearB = parseInt(b.year);

                return yearB - yearA;

            });

            break;

        case "Oldest":

            result.sort((a, b) => {

                const yearA = parseInt(a.year);

                const yearB = parseInt(b.year);

                return yearA - yearB;

            });

            break;

        case "A-Z":

            result.sort((a, b) =>
                a.title.localeCompare(b.title)
            );

            break;

        case "Z-A":

            result.sort((a, b) =>
                b.title.localeCompare(a.title)
            );

            break;

    }

    return result;

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

            <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <ProjectSearch v-model="searchQuery" class="flex-1" />

                <ProjectSort v-model="selectedSort" />

            </div>

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

            <div v-if="filteredProjects.length" class="
        mt-16
        grid
        gap-8
        lg:grid-cols-2
    ">

                <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project"
                    @view="openProject" />

            </div>

            <div v-else class="
        mt-20
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-slate-700
        py-20
        text-center
    ">

                <div class="text-6xl">
                    🔍
                </div>

                <h3 class="mt-6 text-2xl font-bold text-white">
                    No projects found
                </h3>

                <p class="mt-2 max-w-md text-slate-400">
                    Try another keyword or change the selected filter.
                </p>

                <button class="
            mt-8
            rounded-xl
            bg-cyan-500
            px-6
            py-3
            font-semibold
            text-slate-950
            transition
            hover:bg-cyan-400
        " @click="
            searchQuery = '';
        selectedFilter = 'All';
        ">
                    Clear Search
                </button>

            </div>

            <ProjectModal :show="showModal" :project="selectedProject" @close="closeProject" />

            <div class="mt-4 flex justify-center">
                <div
                    class="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2 text-sm text-slate-400">
                    <span>Showing</span>

                    <span class="font-bold text-cyan-400">
                        {{ projectCount.showing }}
                    </span>

                    <span>of</span>

                    <span class="font-bold text-white">
                        {{ projectCount.total }}
                    </span>

                    <span>Projects</span>
                </div>
            </div>

        </AppContainer>

    </SectionWrapper>

</template>