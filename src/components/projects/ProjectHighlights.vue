<script setup>
import { CircleCheck } from "lucide-vue-next";

defineProps({
    highlights: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>

    <ul
        class="
            space-y-3
        "
    >

        <li
            v-for="item in highlights"
            :key="item"
            class="
                flex
                items-start
                gap-3
                text-sm
                leading-6
                text-slate-300
            "
        >

            <CircleCheck
                class="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    text-cyan-400
                "
            />

            <span>
                {{ item }}
            </span>

        </li>

    </ul>

</template>