<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <span class="
      inline-flex
items-center
rounded-full
border
border-cyan-500/30
bg-cyan-500/10
px-3
py-1
text-xs
font-medium
tracking-wide
text-cyan-400
transition-all
duration-300
hover:-translate-y-0.5
hover:border-cyan-400
hover:bg-cyan-500/20
    ">
    {{ text }}
  </span>
</template>