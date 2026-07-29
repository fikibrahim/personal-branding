<script setup>
import HeroButtons from "@/components/hero/HeroButtons.vue";
import HeroSocial from "@/components/hero/HeroSocial.vue";
import HeroStats from "@/components/hero/HeroStats.vue";
import SkillBar from "@/components/skill/SkillBar.vue";
import SectionWrapper from "../common/SectionWrapper.vue";
</script>

<template>
  <div data-aos="fade-right" class="max-w-2xl lg:pt-6">

    <!-- Heading -->
    <h1 class="mb-6 text-5xl font-bold leading-tight">
      👋 Hi, I'm Taufik
    </h1>

    <!-- Description -->
    <p class="mb-10 text-lg leading-8 text-slate-400">
      Website personal branding saya sedang dibangun
      menggunakan Vue 3, Vite, dan Tailwind CSS v4.
    </p>

    <!-- Buttons -->
    <div class="mb-8">
      <HeroButtons />
    </div>

    <!-- Social -->
    <div class="mb-10">
      <HeroSocial />
    </div>

    <!-- Stats -->
    <HeroStats />


  </div>
</template>