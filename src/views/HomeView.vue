<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import AboutSection from "@/components/about/AboutSection.vue";
import ExperienceSection from "@/components/experience/ExperienceSection.vue";
</script>

<template>
  <DefaultLayout>
    <section>
      <HeroSection />
    </section>
    <AboutSection />
    <ExperienceSection />
  </DefaultLayout>
</template>