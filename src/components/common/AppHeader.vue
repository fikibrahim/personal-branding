<script setup>
import { ref } from "vue";
import { Menu, X } from "lucide-vue-next";

import AppContainer from "./AppContainer.vue";
import Logo from "../ui/Logo.vue";

import { navigation } from "@/data/navigation";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>

  <header class="
            sticky
            top-0
            z-50
            border-b
            border-slate-800
            bg-slate-950/80
            backdrop-blur
        ">

    <AppContainer>

      <!-- Header -->

      <div class="
                flex
                h-20
                items-center
                justify-between
            ">

        <Logo />

        <!-- Desktop Navigation -->

        <nav class="
                    hidden
                    items-center
                    gap-8
                    md:flex
                ">

          <a v-for="item in navigation" :key="item.name" :href="item.href" class="
                            text-sm
                            font-medium
                            text-slate-300
                            transition-colors
                            duration-300
                            hover:text-cyan-400
                        ">
            {{ item.name }}
          </a>

        </nav>

        <!-- Mobile Menu Button -->

        <button type="button" class="
                        inline-flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-700
                        bg-slate-900
                        text-slate-300
                        transition-all
                        duration-300
                        hover:border-cyan-400
                        hover:text-cyan-400
                        md:hidden
                    " :aria-label="isMenuOpen
                        ? 'Close menu'
                        : 'Open menu'
                      " :aria-expanded="isMenuOpen" @click="toggleMenu">

          <X v-if="isMenuOpen" class="h-5 w-5" />

          <Menu v-else class="h-5 w-5" />

        </button>

      </div>

      <!-- Mobile Navigation -->

      <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">

        <nav v-if="isMenuOpen" class="
                        border-t
                        border-slate-800
                        py-4
                        md:hidden
                    ">

          <div class="flex flex-col gap-1">

            <a v-for="item in navigation" :key="item.name" :href="item.href" class="
                                rounded-xl
                                px-4
                                py-3
                                text-sm
                                font-medium
                                text-slate-300
                                transition-all
                                duration-300
                                hover:bg-slate-900
                                hover:text-cyan-400
                            " @click="closeMenu">
              {{ item.name }}
            </a>

          </div>

        </nav>

      </Transition>

    </AppContainer>

  </header>

</template>