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

            <!-- LEFT -->
            <FeaturedImage :image="project.image" :title="project.title" :demo="project.demo" />

            <!-- RIGHT -->
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
                            items-center
                            justify-between
                            gap-4
                            flex-wrap
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
                                text-3xl
                                font-bold
                                leading-tight
                                text-white
                                transition
                                group-hover:text-cyan-400
                            ">
                            {{ project.title }}
                        </h2>

                        <p class="
                                mt-2
                                text-base
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

                    <p class="
                            line-clamp-3
                            leading-7
                            text-slate-400
                        ">
                        {{ project.description }}
                    </p>

                    <!-- Tech -->

                    <ProjectTech :technologies="project.technologies.slice(0, 5)" />

                    <!-- Stats -->

                    <FeaturedStats v-if="project.stats" :stats="project.stats" />

                </div>

                <!-- Footer -->

                <div class="
                        mt-8
                        flex
                        flex-wrap
                        items-center
                        justify-between
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