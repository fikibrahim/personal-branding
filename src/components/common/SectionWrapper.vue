<script setup>
defineProps({
  id: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <section :id="id" class="
      py-24
      lg:py-28
    ">
    <slot />
  </section>
</template>