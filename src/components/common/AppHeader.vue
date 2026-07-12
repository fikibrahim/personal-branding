<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur"
  >
    <AppContainer>
      <div class="flex h-20 items-center justify-between">
        <Logo />

        <nav class="hidden gap-8 md:flex">
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </AppContainer>
  </header>
</template>

<script setup>
import AppContainer from './AppContainer.vue'
import Logo from '../ui/Logo.vue'
</script>