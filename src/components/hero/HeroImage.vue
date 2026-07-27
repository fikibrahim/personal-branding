<script setup>
import profileImage from "@/assets/images/profile.png";
import HeroStats from "@/components/hero/HeroStats.vue";
</script>

<template>
  <div class="relative flex flex-col items-center">

    <!-- Glow Background -->
    <div
      class="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
    ></div>

    <!-- Gradient Ring -->
    <div
      class="animate-floating rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 p-1 shadow-2xl"
    >
      <div class="rounded-full bg-slate-950 p-2">

        <img
          :src="profileImage"
          alt="Taufik Ibrahim"
          class="
            h-80
            w-80
            rounded-full
            object-cover
            transition-all
            duration-500
            hover:scale-105
          "
        />

      </div>
    </div>

    <!-- Hero Stats -->
    <HeroStats />

  </div>
</template>