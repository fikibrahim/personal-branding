<template>
  <footer class="border-t border-slate-800 py-8">
    <AppContainer>
      <p class="text-center text-sm text-slate-400">
        © {{ new Date().getFullYear() }} Taufik Ibrahim.
        All rights reserved.
      </p>
    </AppContainer>
  </footer>
</template>

<script setup>
import AppContainer from './AppContainer.vue'
</script>