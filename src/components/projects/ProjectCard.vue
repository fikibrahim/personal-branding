<script setup>
import BaseCard from "@/components/common/BaseCard.vue";
import ProjectImage from "@/components/projects/ProjectImage.vue";
import ProjectContent from "@/components/projects/ProjectContent.vue";
import ProjectActions from "@/components/projects/ProjectActions.vue";

const emit = defineEmits([
    "view",
]);

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
});

function openProject() {
    emit("view", props.project);
}
</script>

<template>

    <BaseCard class="
            group
            relative
            h-full
            cursor-pointer
            overflow-hidden
            border-slate-800
            bg-slate-900
            shadow-lg
            shadow-black/20
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-cyan-500/30
            hover:shadow-2xl
            hover:shadow-cyan-500/10
        " @click="openProject">

        <!-- ========================================================= -->
        <!-- Card Glow -->
        <!-- ========================================================= -->

        <div class="
                pointer-events-none
                absolute
                -inset-px
                z-0
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
        <!-- Project Image -->
        <!-- ========================================================= -->

        <div class="relative z-10">

            <ProjectImage :image="project.image" :title="project.title" :status="project.status" />

        </div>

        <!-- ========================================================= -->
        <!-- Project Content -->
        <!-- ========================================================= -->

        <div class="
                relative
                z-10
                flex
                h-full
                flex-col
                p-6
            ">

            <div class="flex-1">

                <ProjectContent :project="project" />

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
                    pt-5
                ">

                <!-- View Details -->

                <button type="button" class="
                        group/button
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-cyan-500/10
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-cyan-400
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-cyan-500
                        hover:text-slate-950
                    " @click.stop="openProject">

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

    </BaseCard>

</template>