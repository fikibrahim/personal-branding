<script setup>

import BaseBadge from "@/components/common/BaseBadge.vue";

defineProps({

    technologies: {
        type: Array,
        default: () => [],
    }

});

</script>

<template>

    <div class="
            flex
            flex-wrap
            gap-2
        ">

        <BaseBadge v-for="tech in technologies" :key="tech" :text="tech" />

    </div>
    

</template>