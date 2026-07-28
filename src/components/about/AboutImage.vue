<script setup>
import profileImage from "@/assets/images/profile.png";
import BaseCard from "@/components/common/BaseCard.vue";
</script>

<template>
    <div class="relative flex justify-center" data-aos="fade-right">

        <!-- Glow -->
        <div class="absolute h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <!-- Photo -->
        <div class="relative overflow-hidden rounded-3xl border border-slate-700/50">
            <img :src="profileImage" alt="Taufik Ibrahim" class="h-[480px] w-[360px] object-cover" />
        </div>

        <!-- Experience Card -->
        <BaseCard class="absolute -left-6 top-10">
            <p class="text-3xl font-bold text-cyan-400">
                5+
            </p>

            <p class="text-sm text-slate-400">
                Years Experience
            </p>
        </BaseCard>

        <!-- Projects Card -->
        <BaseCard class="absolute -right-6 bottom-12">
            <p class="text-3xl font-bold text-cyan-400">
                20+
            </p>

            <p class="text-sm text-slate-400">
                Projects
            </p>
        </BaseCard>

    </div>
</template>