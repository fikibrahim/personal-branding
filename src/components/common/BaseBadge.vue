<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <span
    class="
      inline-flex
      rounded-full
      border
      border-cyan-500/30
      bg-cyan-500/10
      px-3
      py-1
      text-xs
      font-medium
      text-cyan-400
    "
  >
    {{ text }}
  </span>
</template>