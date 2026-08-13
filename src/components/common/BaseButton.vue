<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
  },

  href: {
    type: String,
    default: "#",
  },

  target: {
    type: String,
    default: "_self",
  },
});
</script>

<template>

  <a :href="href" :target="target" :rel="target === '_blank' ? 'noopener noreferrer' : undefined" :class="[
    `
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-400/40
                active:scale-95
            `,

    variant === 'primary'
      ? `
                    border-cyan-500
                    bg-cyan-500
                    text-slate-950
                    hover:-translate-y-1
                    hover:border-cyan-400
                    hover:bg-cyan-400
                    hover:shadow-lg
                    hover:shadow-cyan-500/20
                `
      : `
                    border-slate-700
                    bg-slate-900
                    text-white
                    hover:-translate-y-1
                    hover:border-cyan-400/50
                    hover:bg-slate-800
                    hover:text-cyan-300
                `,
  ]">

    <slot />

  </a>

</template>