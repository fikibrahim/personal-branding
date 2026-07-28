<script setup>
import AppContainer from "@/components/common/AppContainer.vue";

import HeroContent from "@/components/hero/HeroContent.vue";
import HeroImage from "@/components/hero/HeroImage.vue";
</script>

<template>
  <section
    class="
      flex
      min-h-screen
      items-center
      py-12
    "
  >
    <AppContainer>
      <div
        class="
          grid
          grid-cols-1
          items-center
          gap-16
          lg:grid-cols-2
          lg:gap-20
        "
      >
        <!-- Hero Content -->
        <HeroContent
          class="order-2 lg:order-1"
        />

        <!-- Hero Image -->
        <HeroImage
          class="order-1 lg:order-2"
        />
      </div>
    </AppContainer>
  </section>
</template>