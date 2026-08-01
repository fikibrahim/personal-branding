<script setup>
import ProjectBadge from "@/components/projects/ProjectBadge.vue";
import ProjectTech from "@/components/projects/ProjectTech.vue";
import ProjectHighlights from "@/components/projects/ProjectHighlights.vue";
import ProjectActions from "@/components/projects/ProjectActions.vue";
import { X } from "lucide-vue-next";

defineProps({

    show: {
        type: Boolean,
        default: false,
    },

    project: {
        type: Object,
        default: null,
    },

});

const emit = defineEmits([
    "close",
]);

function closeModal() {
    emit("close");
}

</script>

<template>

    <Teleport to="body">

        <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">

            <div v-if="show" @click.self="emit('close')" class="
        fixed
        inset-0
        z-50
        overflow-y-auto
        bg-black/80
        backdrop-blur-md
        p-6
    ">

                <div @click.stop class="
        mx-auto
        max-w-5xl
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        shadow-2xl
    ">

                    <!-- Header -->

                    <div class="relative">

                        <img :src="project?.image" :alt="project?.title" class="
                                h-80
                                w-full
                                rounded-t-3xl
                                object-cover
                            ">

                        <button @click.stop="closeModal"
                            class="absolute right-5 top-5 z-30 rounded-full bg-slate-900/80 p-2 text-white transition hover:bg-cyan-500 hover:text-slate-950">
                            <X class="h-5 w-5" />
                        </button>

                        <div
                            class="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent">
                        </div>

                    </div>

                    <!-- Content -->

                    <div class="space-y-8 p-8">

                        <div class="
                                flex
                                flex-wrap
                                items-center
                                justify-between
                                gap-4
                            ">

                            <ProjectBadge :text="project?.type" />

                            <span class="
                                    rounded-full
                                    border
                                    border-cyan-500/30
                                    bg-cyan-500/10
                                    px-4
                                    py-1
                                    text-sm
                                    font-medium
                                    text-cyan-400
                                ">
                                {{ project?.status }}
                            </span>

                        </div>

                        <div>

                            <h2 class="
                                    text-4xl
                                    font-bold
                                    text-white
                                ">
                                {{ project?.title }}
                            </h2>

                            <p class="
                                    mt-2
                                    text-lg
                                    text-cyan-400
                                ">
                                {{ project?.company }}
                            </p>

                            <p class="
                                    mt-1
                                    text-slate-500
                                ">
                                {{ project?.role }}

                                •

                                {{ project?.year }}
                            </p>

                        </div>

                        <div>

                            <h3 class="
                                    mb-3
                                    text-lg
                                    font-semibold
                                    text-white
                                ">
                                Description
                            </h3>

                            <p class="
                                    leading-8
                                    text-slate-400
                                ">
                                {{ project?.description }}
                            </p>

                        </div>

                        <ProjectTech :technologies="project?.technologies || []" />

                        <ProjectHighlights :highlights="project?.responsibilities || []" />

                        <ProjectActions :github="project?.github" :demo="project?.demo" />

                    </div>

                </div>

            </div>

        </Transition>

    </Teleport>

</template>