<script setup>
import FeaturedImage from "@/components/projects/FeaturedImage.vue";

const emit = defineEmits([
    "view",
]);

defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>

<template>

    <div class="
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        transition-all
        duration-500
        hover:border-cyan-500/30
        hover:shadow-xl
        hover:shadow-cyan-500/10
    ">

        <FeaturedImage :project="project" @click="emit('view', project)" />

    </div>

</template>