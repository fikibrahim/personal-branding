<script setup>
defineProps({
  badge: String,
  title: String,
  subtitle: String,
  align: {
    type: String,
    default: "left",
  },
});
</script>

<template>
  <div
    :class="[
      align === 'center'
        ? 'text-center'
        : 'text-left'
    ]"
  >
    <!-- Badge -->
    <span
      v-if="badge"
      class="
        inline-flex
        rounded-full
        border
        border-cyan-500/30
        bg-cyan-500/10
        px-4
        py-1
        text-sm
        font-medium
        text-cyan-400
      "
    >
      {{ badge }}
    </span>

    <!-- Title -->
    <h2
      class="
        mt-4
        text-4xl
        font-bold
        text-white
      "
    >
      {{ title }}
    </h2>

    <!-- Subtitle -->
    <p
      v-if="subtitle"
      class="
        mt-4
        max-w-2xl
        text-slate-400
      "
      :class="{
        'mx-auto': align === 'center'
      }"
    >
      {{ subtitle }}
    </p>
  </div>
</template>