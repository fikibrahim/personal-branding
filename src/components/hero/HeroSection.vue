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
        lg:grid-cols-2
        gap-20
        items-start
      "
    >
      <HeroContent />

      <HeroImage />
    </div>
  </AppContainer>
</template>