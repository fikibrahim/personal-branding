<script setup>
import { ref, computed, watch } from "vue";

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
| Constants
|--------------------------------------------------------------------------
*/

const PROJECTS_PER_LOAD = 2;

/*
|--------------------------------------------------------------------------
| State
|--------------------------------------------------------------------------
*/

const selectedFilter = ref("All");
const searchQuery = ref("");
const selectedSort = ref("Newest");

const visibleProjects = ref(PROJECTS_PER_LOAD);

const selectedProject = ref(null);
const showModal = ref(false);

/*
|--------------------------------------------------------------------------
| Filters
|--------------------------------------------------------------------------
*/

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
| Filter + Search + Sort
|--------------------------------------------------------------------------
*/

const filteredProjects = computed(() => {

    let result = [...projects];

    // Filter

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

    // Search

    if (searchQuery.value.trim()) {

        const keyword = searchQuery.value.toLowerCase();

        result = result.filter(project =>

            project.title.toLowerCase().includes(keyword) ||
            project.company.toLowerCase().includes(keyword) ||
            project.role.toLowerCase().includes(keyword) ||
            project.category.toLowerCase().includes(keyword) ||
            project.description.toLowerCase().includes(keyword) ||
            project.technologies.some(tech =>
                tech.toLowerCase().includes(keyword)
            )

        );

    }

    // Sort

    switch (selectedSort.value) {

        case "Newest":
            result.sort(
                (a, b) => parseInt(b.year) - parseInt(a.year)
            );
            break;

        case "Oldest":
            result.sort(
                (a, b) => parseInt(a.year) - parseInt(b.year)
            );
            break;

        case "A-Z":
            result.sort(
                (a, b) => a.title.localeCompare(b.title)
            );
            break;

        case "Z-A":
            result.sort(
                (a, b) => b.title.localeCompare(a.title)
            );
            break;

    }

    return result;

});

/*
|--------------------------------------------------------------------------
| Load More
|--------------------------------------------------------------------------
*/

const displayedProjects = computed(() =>
    filteredProjects.value.slice(0, visibleProjects.value)
);

const hasMoreProjects = computed(() =>
    displayedProjects.value.length < filteredProjects.value.length
);

const remainingProjects = computed(() =>
    filteredProjects.value.length - displayedProjects.value.length
);

const loadMoreLabel = computed(() => {

    const remaining = remainingProjects.value;

    if (remaining <= 0) {
        return "";
    }

    if (remaining === 1) {
        return "Load 1 More Project";
    }

    return `Load ${Math.min(PROJECTS_PER_LOAD, remaining)} More Projects`;

});

/*
|--------------------------------------------------------------------------
| Counter
|--------------------------------------------------------------------------
*/

const projectCount = computed(() => ({
    showing: displayedProjects.value.length,
    total: filteredProjects.value.length,
}));

/*
|--------------------------------------------------------------------------
| Watch
|--------------------------------------------------------------------------
*/

watch(
    [selectedFilter, searchQuery, selectedSort],
    () => {
        visibleProjects.value = PROJECTS_PER_LOAD;
    }
);

/*
|--------------------------------------------------------------------------
| Methods
|--------------------------------------------------------------------------
*/

function loadMore() {
    visibleProjects.value += PROJECTS_PER_LOAD;
}

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

            <!-- ========================================= -->
            <!-- Section Title -->
            <!-- ========================================= -->

            <SectionTitle badge="Portfolio" title="Featured Projects"
                description="A collection of projects I have built throughout my career as a Frontend Developer, Mobile Developer, Full Stack Developer, and Programming Instructor." />

            <!-- ========================================= -->
            <!-- Search & Sort -->
            <!-- ========================================= -->

            <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <ProjectSearch v-model="searchQuery" class="flex-1" />

                <ProjectSort v-model="selectedSort" />

            </div>

            <!-- ========================================= -->
            <!-- Filter -->
            <!-- ========================================= -->

            <ProjectFilter v-model="selectedFilter" :filters="filters" :counts="filterCounts" />

            <!-- ========================================= -->
            <!-- Counter -->
            <!-- ========================================= -->

            <div class="mt-6 flex justify-center">

                <div class="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-700
                        bg-slate-900/60
                        px-5
                        py-2
                        text-sm
                        text-slate-400
                    ">

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

            <!-- ========================================= -->
            <!-- Project Grid -->
            <!-- ========================================= -->

            <div v-if="displayedProjects.length" class="
                    mt-12
                    grid
                    gap-8
                    lg:grid-cols-2
                ">

                <ProjectCard v-for="project in displayedProjects" :key="project.id" :project="project"
                    @view="openProject" />

            </div>

            <!-- ========================================= -->
            <!-- Empty State -->
            <!-- ========================================= -->

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
                    selectedSort = 'Newest';
                    ">

                    Clear Search

                </button>

            </div>

            <!-- ========================================= -->
            <!-- Load More -->
            <!-- ========================================= -->

            <div v-if="hasMoreProjects" class="mt-16 flex justify-center">

                <button @click="loadMore" class="
                        rounded-2xl
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        px-8
                        py-4
                        font-semibold
                        text-cyan-400
                        transition-all
                        duration-300
                        hover:bg-cyan-500
                        hover:text-slate-950
                        hover:shadow-lg
                        hover:shadow-cyan-500/20
                    ">

                    {{ loadMoreLabel }}

                </button>

            </div>

            <!-- ========================================= -->
            <!-- Finish -->
            <!-- ========================================= -->

            <div v-else-if="filteredProjects.length" class="mt-16 flex justify-center">

                <div class="
                        rounded-full
                        border
                        border-emerald-500/20
                        bg-emerald-500/10
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-emerald-400
                    ">

                    ✓ All projects loaded

                </div>

            </div>

            <!-- ========================================= -->
            <!-- Modal -->
            <!-- ========================================= -->

            <ProjectModal :show="showModal" :project="selectedProject" @close="closeProject" />

        </AppContainer>

    </SectionWrapper>
</template>