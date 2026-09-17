<script setup>
import { computed } from "vue";

import BaseCard from "@/components/common/BaseCard.vue";
import BaseBadge from "@/components/common/BaseBadge.vue";
import { icons } from "@/utils/icons";

const props = defineProps({
    experience: {
        type: Object,
        required: true,
    },
});

const iconComponent = computed(() => {
    return icons[props.experience.icon] ?? icons.BriefcaseBusiness;
});
</script>

<template>
    <BaseCard class="group relative min-w-0 overflow-hidden" data-aos="fade-up">
        <!-- Accent -->
        <div
            class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:h-1.5" />

        <!-- Header -->
        <div class="flex min-w-0 items-start gap-3 sm:gap-4">

            <!-- Icon -->
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 sm:h-14 sm:w-14">
                <component :is="iconComponent" class="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />
            </div>

            <!-- Title -->
            <div class="min-w-0 flex-1">

                <p class="text-sm font-medium text-cyan-400">
                    {{ experience.period }}
                </p>

                <h3 class="mt-1 break-words text-lg font-bold text-white sm:text-xl">
                    {{ experience.title }}
                </h3>

                <p class="mt-1 break-words text-slate-400">
                    {{ experience.company }}
                </p>

                <div class="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span class="break-words">
                        {{ experience.location }}
                    </span>

                    <span class="shrink-0">•</span>

                    <span class="break-words">
                        {{ experience.employmentType }}
                    </span>
                </div>

            </div>
        </div>

        <!-- Technologies -->
        <div class="mt-6 flex min-w-0 flex-wrap gap-2">
            <BaseBadge v-for="tech in experience.technologies" :key="tech" :text="tech" />
        </div>

        <!-- Description -->
        <ul class="mt-6 space-y-3">
            <li v-for="item in experience.description" :key="item"
                class="flex min-w-0 items-start gap-3 text-slate-400">
                <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                <span class="min-w-0 break-words">
                    {{ item }}
                </span>
            </li>
        </ul>
    </BaseCard>
</template>