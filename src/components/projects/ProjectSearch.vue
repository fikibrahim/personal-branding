<script setup>
import { Search } from "lucide-vue-next";

defineProps({
    modelValue: {
        type: String,
        default: "",
    },
});

const emit = defineEmits([
    "update:modelValue",
]);
</script>

<template>
    <div class="relative">

        <Search class="
                absolute
                left-4
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                text-slate-500
            " />

        <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)" type="text"
            placeholder="Search project, technology, company..." class="
                w-full
                rounded-2xl
                border
                border-slate-700
                bg-slate-900
                py-3
                pl-12
                pr-4
                text-white
                placeholder:text-slate-500
                outline-none
                transition
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-500/20
            " />

    </div>
</template>