<script setup>
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import {
  Github,
  Linkedin,
} from "lucide-vue-next";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/fikibrahim",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/fikibrahim",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:taufikibrahim21@gmail.com",
    icon: EnvelopeIcon,
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
      rel="noopener noreferrer"
      :aria-label="social.name"
      class="group"
    >
      <component
        :is="social.icon"
        class="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-cyan-400"
      />
    </a>

  </div>
</template>