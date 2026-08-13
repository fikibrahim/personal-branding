<script setup>
import BaseBadge from "@/components/common/BaseBadge.vue";

defineProps({
    technologies: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>

    <div v-if="technologies.length" class="
            flex
            flex-wrap
            items-center
            gap-2
        ">

        <span v-for="tech in technologies" :key="tech" class="
                rounded-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
            ">

            <BaseBadge :text="tech" />

        </span>

    </div>

</template>