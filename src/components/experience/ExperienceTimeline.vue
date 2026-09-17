<script setup>
import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard.vue";
</script>

<template>
    <div class="relative mt-16 min-w-0 sm:mt-20">

        <!-- Vertical Line -->
        <div class="absolute left-4 top-0 h-full w-px bg-slate-700 sm:left-6 lg:left-1/2 lg:-translate-x-1/2" />

        <div v-for="(experience, index) in experiences" :key="experience.id"
            class="relative mb-10 min-w-0 grid lg:mb-12 lg:grid-cols-2 lg:gap-16">
            <!-- Dot -->
            <div
                class="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-500/50 sm:left-6 lg:left-1/2" />

            <!-- Left -->
            <div v-if="index % 2 === 0" class="ml-8 min-w-0 sm:ml-12 lg:ml-0">
                <ExperienceCard :experience="experience" />
            </div>

            <div v-else />

            <!-- Right -->
            <div v-if="index % 2 !== 0" class="ml-8 min-w-0 sm:ml-12 lg:ml-0">
                <ExperienceCard :experience="experience" />
            </div>

            <div v-else />

        </div>

    </div>
</template>