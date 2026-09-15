<script setup>
import profileImage from "@/assets/images/profile.png";
import BaseCard from "@/components/common/BaseCard.vue";
</script>

<template>
    <div class="relative flex min-w-0 w-full justify-center px-2 sm:px-0" data-aos="fade-right">
        <!-- Glow -->
        <div class="absolute h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl sm:h-72 sm:w-72"></div>

        <!-- Photo -->
        <div class="relative overflow-hidden rounded-3xl border border-slate-700/50">
            <img :src="profileImage" alt="Taufik Ibrahim"
                class="h-[400px] w-[300px] object-cover sm:h-[440px] sm:w-[330px] lg:h-[480px] lg:w-[360px]" />
        </div>

        <!-- Experience Card -->
        <BaseCard class="absolute left-0 top-6 sm:-left-4 sm:top-10 lg:-left-6">
            <p class="text-2xl font-bold text-cyan-400 sm:text-3xl">
                5+
            </p>

            <p class="text-xs text-slate-400 sm:text-sm">
                Years Experience
            </p>
        </BaseCard>

        <!-- Projects Card -->
        <BaseCard class="absolute right-0 bottom-8 sm:-right-4 sm:bottom-10 lg:-right-6 lg:bottom-12">
            <p class="text-2xl font-bold text-cyan-400 sm:text-3xl">
                20+
            </p>

            <p class="text-xs text-slate-400 sm:text-sm">
                Projects
            </p>
        </BaseCard>
    </div>
</template>