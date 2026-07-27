<script setup>
import { codeSnippets } from "@/data/heroCode";

const snippet = codeSnippets[0];
</script>

<template>
  <div
    class="mt-8 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
  >
    <!-- Header -->
    <div
      class="flex items-center justify-between border-b border-slate-700 px-4 py-3"
    >
      <div class="flex items-center gap-2">
        <span class="h-3 w-3 rounded-full bg-red-500"></span>
        <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
        <span class="h-3 w-3 rounded-full bg-green-500"></span>
      </div>

      <span class="text-sm text-slate-400">
        {{ snippet.file }}
      </span>

      <div class="w-12"></div>
    </div>

    <!-- Code -->
    <div class="p-5 font-mono text-sm leading-7">

      <div
        v-for="(line,index) in snippet.code"
        :key="index"
        class="flex gap-4"
      >

        <span
          class="w-5 select-none text-right text-slate-500"
        >
          {{ index + 1 }}
        </span>

        <span class="text-slate-300">
          {{ line }}
        </span>

      </div>

    </div>

  </div>
</template>