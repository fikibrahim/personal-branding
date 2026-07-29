<script setup>
import AppContainer from "@/components/common/AppContainer.vue";
import SectionWrapper from "@/components/common/SectionWrapper.vue";
import BaseCard from "@/components/common/BaseCard.vue";
import SkillBar from "@/components/skill/SkillBar.vue";
import { icons } from "@/utils/icons.js";



const props = defineProps({
    title: {
        type: String,
        required: true,
    },

    icon: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        default: "",
    },

    skills: {
        type: Array,
        default: () => [],
    },

    animate: {
        type: Boolean,
        default: false,
    },
});

const IconComponent = icons[props.icon];


</script>

<template>
    <div data-aos="fade-left">

        <BaseCard class="
            h-full
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-500/30
            hover:shadow-lg
            hover:shadow-cyan-500/10
        ">
            <!-- Header -->
            <div class="mb-8 flex items-start gap-4">

                <!-- Icon -->
                <div class="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-500/10
                    text-cyan-400
                ">
                    <component :is="IconComponent" class="h-7 w-7" />
                </div>

                <!-- Title -->
                <div>

                    <h3 class="
                        text-xl
                        font-semibold
                        text-white
                    ">
                        {{ title }}
                    </h3>

                    <p class="
                        mt-2
                        text-sm
                        leading-6
                        text-slate-400
                    ">
                        {{ description }}
                    </p>

                </div>

            </div>

            <!-- Skills -->
            <div class="space-y-5">

                <SkillBar v-for="skill in skills" :key="skill.name" :name="skill.name" :level="skill.level"
                    :animate="animate" />

            </div>

        </BaseCard>
    </div>
</template>