<script setup>
import BaseCard from "@/components/common/BaseCard.vue";

const highlights = [
    {
        icon: "💻",
        title: "Web Development",
        description:
            "Membangun aplikasi web modern menggunakan Laravel, Vue.js, REST API, dan MySQL.",
    },
    {
        icon: "📱",
        title: "Mobile Development",
        description:
            "Mengembangkan aplikasi mobile dengan Flutter dan Dart yang responsif dan mudah digunakan.",
    },
    {
        icon: "👨‍🏫",
        title: "Teaching",
        description:
            "Mengajar Algoritma dan Pemrograman Dasar dengan pendekatan yang mudah dipahami siswa.",
    },
];
</script>

<template>
    <div class="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
        <BaseCard v-for="item in highlights" :key="item.title" class="group">
            <div
                class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl transition-all duration-300 group-hover:bg-cyan-500/20">
                {{ item.icon }}
            </div>

            <h3 class="mb-3 text-xl font-semibold text-white">
                {{ item.title }}
            </h3>

            <p class="leading-7 text-slate-400">
                {{ item.description }}
            </p>
        </BaseCard>
    </div>
</template>