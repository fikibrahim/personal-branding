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
    <BaseCard class="relative group overflow-hidden" data-aos="fade-up">

        <!-- Accent -->
        <div class="
          absolute
    left-0
    top-0
    h-1
    w-full
    bg-gradient-to-r
    from-cyan-400
    to-blue-500
    transition-all
    duration-300
    group-hover:h-1.5
    " />

        <!-- Header -->
        <div class="flex items-start gap-4">

            <!-- Icon -->
            <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
                <component :is="iconComponent" class="h-6 w-6 text-cyan-400" />
            </div>

            <!-- Title -->
            <div class="flex-1">

                <p class="text-sm font-medium text-cyan-400">
                    {{ experience.period }}
                </p>

                <h3 class="mt-1 text-xl font-bold text-white">
                    {{ experience.title }}
                </h3>

                <p class="mt-1 text-slate-400">
                    {{ experience.company }}
                </p>

                <div class="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span>{{ experience.location }}</span>

                    <span>•</span>

                    <span>{{ experience.employmentType }}</span>
                </div>

            </div>

        </div>

        <!-- Technologies -->
        <div class="mt-6 flex flex-wrap gap-2">
            <BaseBadge v-for="tech in experience.technologies" :key="tech" :text="tech" />
        </div>

        <!-- Description -->
        <ul class="mt-6 space-y-3">
            <li v-for="item in experience.description" :key="item" class="flex items-start gap-3 text-slate-400">
                <span class="mt-2 h-2 w-2 rounded-full bg-cyan-400"></span>

                <span>
                    {{ item }}
                </span>
            </li>
        </ul>

    </BaseCard>



</template>