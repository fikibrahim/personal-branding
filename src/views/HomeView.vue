<template>
  <DefaultLayout>
    <section class="py-24">
      <AppContainer>
        <h1 class="mb-6 text-5xl font-bold">
          Selamat Datang
        </h1>

        <p class="max-w-2xl text-slate-400">
          Website personal branding saya sedang dibangun menggunakan
          Vue 3, Vite, dan Tailwind CSS v4.
        </p>
      </AppContainer>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AppContainer from '@/components/common/AppContainer.vue'
</script>