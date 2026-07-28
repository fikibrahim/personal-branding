<script setup>
import BaseButton from "@/components/common/BaseButton.vue";
import BaseBadge from "@/components/common/BaseBadge.vue";

import { favoriteTechnologies } from "@/data/skills";
</script>

<template>
    <div data-aos="fade-left">

        <h3 class="
        text-3xl
        font-bold
        text-white
      ">
            Hi, I'm Taufik Ibrahim 👋
        </h3>

        <p class="
        mt-6
        leading-8
        text-slate-400
      ">
            Saya adalah seorang Full Stack Web Developer dan Mobile Developer
            yang memiliki pengalaman dalam membangun aplikasi modern menggunakan
            Laravel, Vue.js, Flutter, dan berbagai teknologi web lainnya.
        </p>

        <p class="
        mt-6
        leading-8
        text-slate-400
      ">
            Sebelum berkarier di bidang teknologi, saya memiliki pengalaman lebih
            dari lima tahun di industri hospitality. Pengalaman tersebut membentuk
            kemampuan komunikasi, pelayanan, kerja sama tim, dan penyelesaian
            masalah yang kini sangat membantu dalam pengembangan perangkat lunak.
        </p>

        <p class="
        mt-6
        leading-8
        text-slate-400
      ">
            Saat ini saya juga aktif mengajar Algoritma dan Pemrograman Dasar,
            karena saya percaya bahwa berbagi ilmu adalah salah satu cara terbaik
            untuk terus belajar dan berkembang.
        </p>

        <!-- CTA -->

        <div class="mt-8">

            <BaseButton href="#projects" variant="primary" class="w-full sm:w-auto">
                View My Projects
            </BaseButton>

        </div>

        <!-- Favorite Technologies -->

        <div class="mt-12">

            <h4 class="
          mb-5
          text-sm
          font-semibold
          uppercase
          tracking-widest
          text-slate-500
        ">
                Favorite Technologies
            </h4>

            <div class="flex flex-wrap gap-3">

                <BaseBadge v-for="technology in favoriteTechnologies" :key="technology" :text="technology" />

            </div>

        </div>

    </div>
</template>