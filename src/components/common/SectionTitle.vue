<script setup>
defineProps({
  badge: String,
  title: String,
  description: String,
});
</script>

<template>
  <div class="mx-auto mb-16 max-w-3xl text-center">

    <span class="
        inline-flex
        rounded-full
        border
        border-cyan-500/30
        bg-cyan-500/10
        px-4
        py-1
        text-xs
        font-medium
        tracking-wide
        text-cyan-400
      ">
      {{ badge }}
    </span>

    <h2 class="
        mt-6
        text-4xl
        font-bold
        tracking-tight
        text-white
        lg:text-5xl
      ">
      {{ title }}
    </h2>

    <p class="
        mx-auto
        mt-5
        max-w-2xl
        text-lg
        leading-8
        text-slate-400
      ">
      {{ description }}
    </p>

  </div>
</template>