<script setup>
import { ExternalLink } from "lucide-vue-next";

defineProps({
    image: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="relative h-full overflow-hidden bg-slate-950">

        <!-- Background Glow -->
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10">
        </div>

        <!-- Browser Window -->
        <div class="relative m-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

            <!-- Browser Header -->
            <div class="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-4 py-3">

                <!-- Traffic Lights -->
                <div class="flex gap-2">
                    <span class="h-3 w-3 rounded-full bg-red-500"></span>
                    <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
                    <span class="h-3 w-3 rounded-full bg-green-500"></span>
                </div>

                <!-- Address Bar -->
                <div
                    class="mx-6 flex-1 rounded-full bg-slate-700 px-4 py-1 text-center text-xs text-slate-400 truncate">

                    {{ title }}

                </div>

                <ExternalLink class="h-4 w-4 text-slate-400" />

            </div>

            <!-- Screenshot -->
            <div class="relative overflow-hidden">

                <img :src="image" :alt="title"
                    class="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />

                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent">
                </div>

                <!-- Badge -->
                <div
                    class="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg">

                    ⭐ Featured Project

                </div>

            </div>

        </div>

        <!-- Decorative Blur -->
        <div class="absolute -bottom-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl">
        </div>

    </div>
</template>