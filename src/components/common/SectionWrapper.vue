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
      py-8
      lg:py-28
    ">
    <slot />
  </section>
</template>