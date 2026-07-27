<script setup>
import AppContainer from "@/components/common/AppContainer.vue";

import HeroContent from "@/components/hero/HeroContent.vue";
import HeroImage from "@/components/hero/HeroImage.vue";
</script>

<template>
  <AppContainer>
    <div
      class="
        grid
        items-center
        gap-16
        lg:grid-cols-2
      "
    >
      <HeroContent />

      <HeroImage />
    </div>
  </AppContainer>
</template>