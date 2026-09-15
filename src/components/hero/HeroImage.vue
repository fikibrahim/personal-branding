<script setup>
import profileImage from "@/assets/images/profile.png";
import HeroCodeEditor from "@/components/hero/HeroCodeEditor.vue";
</script>

<template>
  <div class="relative
      flex
      min-w-0
      w-full
      flex-col
      items-center" data-aos="fade-left">

    <!-- Glow Background -->
    <div class="absolute
        h-64
        w-64
        rounded-full
        bg-cyan-500/20
        blur-3xl
        sm:h-80
        sm:w-80"></div>

    <!-- Gradient Ring -->
    <div class="animate-floating
        rounded-full
        bg-gradient-to-br
        from-blue-500
        via-cyan-400
        to-purple-500
        p-1
        shadow-2xl">

      <div class="rounded-full bg-slate-950 p-2">

        <img :src="profileImage" alt="Taufik Ibrahim" class="
            h-60
            w-60
            rounded-full
            object-cover
            transition-all
            duration-500
            hover:scale-105
            sm:h-72
            sm:w-72
            lg:h-80
            lg:w-80
          " />

      </div>
    </div>

    <!-- Hero Code Editor -->
    <div class="mt-6
        min-w-0
        w-full
        max-w-lg
        px-0
        sm:mt-8">
      <HeroCodeEditor />
    </div>

  </div>
</template>