<script setup>
import FeaturedImage from "@/components/projects/FeaturedImage.vue";
import ProjectBadge from "@/components/projects/ProjectBadge.vue";
import ProjectTech from "@/components/projects/ProjectTech.vue";
import ProjectHighlights from "@/components/projects/ProjectHighlights.vue";
import ProjectActions from "@/components/projects/ProjectActions.vue";

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
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-slate-900
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-cyan-500/30
            hover:shadow-2xl
            hover:shadow-cyan-500/10
        ">

        <div class="grid lg:grid-cols-2">

            <!-- Left -->

            <FeaturedImage :image="project.image" :title="project.title" />

            <!-- Right -->

            <div class="
                    flex
                    flex-col
                    justify-between
                    p-8
                ">

                <div class="space-y-6">

                    <!-- Header -->

                    <div class="
                            flex
                            flex-wrap
                            items-center
                            justify-between
                            gap-3
                        ">

                        <ProjectBadge text="⭐ Featured Project" />

                        <span class="
                                rounded-full
                                border
                                border-cyan-500/20
                                bg-cyan-500/10
                                px-4
                                py-1.5
                                text-xs
                                font-semibold
                                text-cyan-400
                            ">
                            {{ project.status }}
                        </span>

                    </div>

                    <!-- Title -->

                    <div>

                        <h2 class="
                                text-4xl
                                font-bold
                                leading-tight
                                text-white
                                transition
                                group-hover:text-cyan-400
                            ">
                            {{ project.title }}
                        </h2>

                        <p class="
                                mt-3
                                text-lg
                                font-medium
                                text-cyan-400
                            ">
                            {{ project.company }}
                        </p>

                        <p class="
                                mt-1
                                text-sm
                                text-slate-500
                            ">
                            {{ project.role }}

                            •

                            {{ project.year }}
                        </p>

                    </div>

                    <!-- Description -->

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
                                leading-8
                                text-slate-400
                            ">
                            {{ project.description }}
                        </p>

                    </div>

                    <!-- Tech -->

                    <ProjectTech :technologies="project.technologies" />

                    <!-- Highlights -->

                    <ProjectHighlights :highlights="project.responsibilities" />

                </div>

                <!-- Footer -->

                <div class="
                        mt-10
                        flex
                        flex-wrap
                        items-center
                        gap-4
                    ">

                    <button @click="openProject" class="
                            rounded-xl
                            bg-cyan-500
                            px-6
                            py-3
                            font-semibold
                            text-slate-950
                            transition
                            hover:bg-cyan-400
                        ">
                        View Details
                    </button>

                    <div @click.stop>

                        <ProjectActions :github="project.github" :demo="project.demo" />

                    </div>

                </div>

            </div>

        </div>

    </article>

</template>