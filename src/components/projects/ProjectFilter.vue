<script setup>
const emit = defineEmits([
    "update:modelValue",
]);

defineProps({

    modelValue: {
        type: String,
        default: "All",
    },

    filters: {
        type: Array,
        default: () => [],
    },

    counts: {
        type: Object,
        default: () => ({}),
    },

});

function selectFilter(value) {
    emit("update:modelValue", value);
}
</script>

<template>

    <div class="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
        ">

        <button v-for="filter in filters" :key="filter.value" @click="selectFilter(filter.value)" class="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-5
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300
            " :class="modelValue === filter.value

                    ? 'border-cyan-400 bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'

                    : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-white hover:-translate-y-0.5'

                ">

            <!-- Icon -->

            <component :is="filter.icon" class="h-4 w-4" />

            <!-- Label -->

            <span>

                {{ filter.label }}

            </span>

            <!-- Counter -->

            <span class="
                    rounded-full
                    border
                    border-white/10
                    bg-white/10
                    px-2
                    py-0.5
                    text-[11px]
                    font-semibold
                    leading-none
                ">

                {{ counts[filter.value] ?? 0 }}

            </span>

        </button>

    </div>

</template>