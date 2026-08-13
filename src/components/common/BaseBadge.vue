<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>

  <span v-if="text" class="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            px-3
            py-1.5
            text-xs
            font-semibold
            tracking-wide
            text-cyan-400
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-cyan-400/40
            hover:bg-cyan-500/15
            hover:text-cyan-300
        ">

    {{ text }}

  </span>

</template>