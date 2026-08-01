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
            h-full
            overflow-hidden
            cursor-pointer
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-cyan-500/30
            hover:shadow-xl
            hover:shadow-cyan-500/10
        " @click="openProject">

        <ProjectImage :image="project.image" :title="project.title" :status="project.status" />

        <div class="space-y-8 p-6">

            <ProjectContent :project="project" />

            <!-- Stop agar klik tombol GitHub/Demo tidak membuka modal lagi -->
            <div @click.stop>

                <ProjectActions :github="project.github" :demo="project.demo" />

            </div>

        </div>

    </BaseCard>

</template>