<script setup>
import BaseButton from "@/components/common/BaseButton.vue";
import { icons } from "@/utils/icons";

defineProps({
    github: {
        type: String,
        default: "",
    },

    demo: {
        type: String,
        default: "",
    },
});
</script>

<template>

    <div v-if="github || demo" class="
            flex
            flex-wrap
            items-center
            gap-3
            pt-2
        ">

        <!-- GitHub -->

        <BaseButton v-if="github" :href="github" target="_blank" rel="noopener noreferrer" variant="secondary">

            <component :is="icons.Github" class="
                    mr-2
                    h-4
                    w-4
                    shrink-0
                " />

            GitHub

        </BaseButton>

        <!-- Live Demo -->

        <BaseButton v-if="demo" :href="demo" target="_blank" rel="noopener noreferrer">

            <component :is="icons.ExternalLink" class="
                    mr-2
                    h-4
                    w-4
                    shrink-0
                " />

            Live Demo

        </BaseButton>

    </div>

</template>