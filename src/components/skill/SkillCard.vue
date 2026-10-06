<script setup>
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
    <div class="min-w-0" data-aos="fade-left">
        <BaseCard class="
                h-full
                min-w-0
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-500/30
                hover:shadow-lg
                hover:shadow-cyan-500/10
            ">
            <!-- Header -->
            <div class="mb-6 flex min-w-0 items-start gap-3 sm:mb-8 sm:gap-4">
                <!-- Icon -->
                <div class="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-cyan-500/10
                        text-cyan-400
                        sm:h-14
                        sm:w-14
                    ">
                    <component :is="IconComponent" class="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <!-- Title & Description -->
                <div class="min-w-0 flex-1">
                    <h3 class="
                            break-words
                            text-lg
                            font-semibold
                            leading-tight
                            text-white
                            sm:text-xl
                        ">
                        {{ title }}
                    </h3>

                    <p class="
                            mt-2
                            break-words
                            text-sm
                            leading-6
                            text-slate-400
                        ">
                        {{ description }}
                    </p>
                </div>
            </div>

            <!-- Skills -->
            <div class="min-w-0 space-y-5">
                <SkillBar v-for="skill in skills" :key="skill.name" :name="skill.name" :level="skill.level"
                    :animate="animate" />
            </div>
        </BaseCard>
    </div>
</template>