<script setup>
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-vue-next";

import AppContainer from "./AppContainer.vue";

import { socials } from "@/data/social";
import { navigation } from "@/data/navigation";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

const footerSocials = socials.filter(
  social => ["github", "linkedin", "mail"].includes(social.icon)
);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>

  <footer class="border-t border-slate-800 bg-slate-950">

    <AppContainer>

      <div class="py-12">

        <!-- Main Footer -->

        <div class="
                    flex
                    flex-col
                    gap-10
                    md:flex-row
                    md:items-start
                    md:justify-between
                ">

          <!-- Branding -->

          <div class="max-w-sm">

            <h2 class="
                            text-xl
                            font-bold
                            text-white
                        ">
              Taufik Ibrahim
            </h2>

            <p class="
                            mt-2
                            text-sm
                            font-medium
                            text-cyan-400
                        ">
              Web & Mobile Developer
            </p>

            <p class="
                            mt-4
                            text-sm
                            leading-6
                            text-slate-500
                        ">
              Building modern, responsive, and
              reliable digital experiences.
            </p>

          </div>

          <!-- Navigation -->

          <div>

            <h3 class="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wider
                            text-white
                        ">
              Navigation
            </h3>

            <nav class="
                            mt-4
                            flex
                            flex-wrap
                            gap-x-6
                            gap-y-3
                        ">

              <a v-for="item in navigation" :key="item.label" :href="item.href" class="
                                    text-sm
                                    text-slate-500
                                    transition
                                    hover:text-cyan-400
                                ">
                {{ item.label }}
              </a>

            </nav>

          </div>

          <!-- Social -->

          <div>

            <h3 class="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wider
                            text-white
                        ">
              Connect
            </h3>

            <div class="
                            mt-4
                            flex
                            flex-wrap
                            gap-3
                        ">

              <a v-for="social in footerSocials" :key="social.name" :href="social.url"
                :target="social.icon === 'mail' ? '_self' : '_blank'" rel="noopener noreferrer"
                :aria-label="social.name" class="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    border
                                    border-slate-800
                                    bg-slate-900
                                    text-slate-400
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-cyan-500/40
                                    hover:bg-cyan-500/10
                                    hover:text-cyan-400
                                ">

                <component :is="iconMap[social.icon]" class="h-4 w-4" />

              </a>

            </div>

          </div>

        </div>

        <!-- Divider -->

        <div class="
                    my-8
                    border-t
                    border-slate-800
                "></div>

        <!-- Bottom -->

        <div class="
                    flex
                    flex-col
                    items-center
                    justify-between
                    gap-4
                    text-sm
                    sm:flex-row
                ">

          <p class="text-slate-500">
            © {{ new Date().getFullYear() }}
            Taufik Ibrahim.
            All rights reserved.
          </p>

          <button type="button" aria-label="Back to top" @click="scrollToTop" class="
                            inline-flex
                            items-center
                            gap-2
                            text-slate-500
                            transition
                            hover:text-cyan-400
                        ">

            Back to top

            <ArrowUp class="h-4 w-4" />

          </button>

        </div>

      </div>

    </AppContainer>

  </footer>

</template>