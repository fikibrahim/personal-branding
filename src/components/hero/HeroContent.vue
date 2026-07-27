<script setup>
import HeroButtons from "@/components/hero/HeroButtons.vue";
import HeroSocial from "@/components/hero/HeroSocial.vue";
import HeroStats from "@/components/hero/HeroStats.vue";
</script>

<template>
  <div>

    <h1 class="mb-6 text-5xl font-bold">
      Selamat Datang
    </h1>

    <p
      class="
        max-w-2xl
        text-slate-400
      "
    >
      Website personal branding saya sedang dibangun
      menggunakan Vue 3, Vite, dan Tailwind CSS v4.
    </p>

    <HeroButtons />

    <HeroSocial />

    <HeroStats />

  </div>
</template>