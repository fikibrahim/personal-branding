<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
  },

  href: String,

  target: {
    type: String,
    default: "_self",
  },
});
</script>

<template>
  <a
    :href="href"
    :target="target"
    :class="[
      'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300',

      variant === 'primary'
        ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:-translate-y-1'

        : 'border border-slate-700 bg-slate-900 text-white hover:border-cyan-400 hover:-translate-y-1'
    ]"
  >
    <slot />
  </a>
</template>