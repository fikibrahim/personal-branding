<script setup>
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
</script>

<template>

    <div class="flex items-center justify-end">

        <select :value="modelValue" @change="emit('update:modelValue', $event.target.value)" class="
                rounded-xl
                border
                border-slate-700
                bg-slate-900
                px-4
                py-3
                text-white
                outline-none
                transition
                focus:border-cyan-500
                focus:ring-2
                focus:ring-cyan-500/20
            ">

            <option v-for="option in options" :key="option" :value="option">
                {{ option }}
            </option>

        </select>

    </div>

</template>