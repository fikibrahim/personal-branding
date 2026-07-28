<script setup>
defineProps({
  hover: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div :class="[
    'rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm p-6 transition-all duration-300',
    hover
      ? 'hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10'
      : '',
  ]">
    <slot />
  </div>
</template>