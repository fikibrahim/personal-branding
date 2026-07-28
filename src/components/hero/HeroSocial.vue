<script setup>
import {
  EnvelopeIcon,
} from "@heroicons/vue/24/outline";

import {
  Github,
  Linkedin,
} from "lucide-vue-next";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/fikibrahim",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/taufik-ibrahim-9a385312b/",
  },
  {
    name: "Email",
    icon: EnvelopeIcon,
    url: "mailto:taufikibrahim21@gmail.com",
  },
];
</script>

<template>
  <div class="mt-8 flex items-center gap-5">

    <a
      v-for="social in socials"
      :key="social.name"
      :href="social.url"
      target="_blank"
      class="group relative"
    >

      <component
        :is="social.icon"
        class="h-6 w-6 text-slate-400 transition duration-300 group-hover:-translate-y-1 group-hover:text-cyan-400"
      />

      <!-- Tooltip -->
      <span
        class="
          pointer-events-none
          absolute
          -top-11
          left-1/2
          -translate-x-1/2
          rounded-lg
          bg-slate-800
          px-3
          py-1
          text-xs
          text-white
          opacity-0
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:opacity-100
        "
      >
        {{ social.name }}
      </span>

    </a>

  </div>
</template>