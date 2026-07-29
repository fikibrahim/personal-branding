<template>
  <DefaultLayout>

    <section>

      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <SkillsSection />


    </section>

  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import AboutSection from "@/components/about/AboutSection.vue";
import ExperienceSection from "@/components/experience/ExperienceSection.vue";
import SkillsSection from "@/components/section/SkillsSection.vue";
</script>
