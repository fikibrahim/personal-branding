<script setup>
import BaseButton from "@/components/common/BaseButton.vue";
</script>

<template>
  <div class="mt-8 flex flex-wrap gap-4">

    <!-- HeroButtons.vue -->
    <BaseButton href="/cv.pdf">
      Download CV
    </BaseButton>

    <BaseButton variant="secondary" href="#contact">
      Hire Me
    </BaseButton>

  </div>
</template>