<script setup>
import { ArrowDownUp } from "lucide-vue-next";

defineProps({
    modelValue: {
        type: String,
        default: "Newest",
    },
});

const emit = defineEmits([
    "update:modelValue",
]);

const options = [
    "Newest",
    "Oldest",
    "A-Z",
    "Z-A",
];

function updateSort(event) {
    emit("update:modelValue", event.target.value);
}
</script>

<template>

    <div class="w-full md:w-auto">

        <div class="
                relative
                flex
                items-center
            ">

            <!-- Sort Icon -->

            <ArrowDownUp class="
                    pointer-events-none
                    absolute
                    left-4
                    z-10
                    h-4
                    w-4
                    text-slate-500
                " />

            <!-- Select -->

            <select :value="modelValue" class="
                    w-full
                    appearance-none
                    rounded-2xl
                    border
                    border-slate-700
                    bg-slate-900
                    py-3.5
                    pl-11
                    pr-10
                    text-sm
                    font-medium
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    hover:border-slate-600
                    focus:border-cyan-500/60
                    focus:ring-2
                    focus:ring-cyan-500/20
                    md:w-44
                " aria-label="Sort projects" @change="updateSort">

                <option v-for="option in options" :key="option" :value="option">
                    {{ option }}
                </option>

            </select>

            <!-- Custom Arrow -->

            <span class="
                    pointer-events-none
                    absolute
                    right-4
                    text-xs
                    text-slate-500
                ">
                ▾
            </span>

        </div>

    </div>

</template>