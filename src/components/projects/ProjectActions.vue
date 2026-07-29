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
    }

});
</script>

<template>

    <div class="
            flex
            flex-wrap
            gap-3
            pt-2
        ">

        <BaseButton v-if="github" :href="github" target="_blank" variant="secondary">

            <component :is="icons.Github" class="mr-2 h-4 w-4" />

            GitHub

        </BaseButton>

        <BaseButton v-if="demo" :href="demo" target="_blank">

            <component :is="icons.ExternalLink" class="mr-2 h-4 w-4" />

            Live Demo

        </BaseButton>

    </div>

</template>