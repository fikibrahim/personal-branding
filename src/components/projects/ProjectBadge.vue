<script setup>
defineProps({

    text: {
        type: String,
        required: true
    }
});

</script>

<template>
    <span
        class="inline-flex item-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
        {{ text }}
    </span>
</template>