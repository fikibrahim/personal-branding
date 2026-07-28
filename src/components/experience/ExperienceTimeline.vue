<script setup>
import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard.vue";
</script>

<template>
    <div class="relative mt-20">

        <!-- Vertical Line -->
        <div class="absolute left-6 top-0 h-full w-px bg-slate-700 lg:left-1/2 lg:-translate-x-1/2" />

        <div v-for="(experience, index) in experiences" :key="experience.id"
            class="relative mb-12 grid lg:grid-cols-2 lg:gap-16">
            <!-- Dot -->
            <div
                class="absolute left-6 top-8 z-10 h-5 w-5 shadow-lg shadow-cyan-500/50 rounded-full border-4 border-slate-950 bg-cyan-400 lg:left-1/2 lg:-translate-x-1/2" />

            <!-- Left -->
            <div v-if="index % 2 === 0" class="ml-16 lg:ml-0">
                <ExperienceCard :experience="experience" />
            </div>

            <div v-else />

            <!-- Right -->
            <div v-if="index % 2 !== 0" class="ml-16 lg:ml-0">
                <ExperienceCard :experience="experience" />
            </div>

            <div v-else />

        </div>

    </div>
</template>