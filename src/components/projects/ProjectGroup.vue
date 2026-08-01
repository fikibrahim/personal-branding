<script setup>
import ProjectCard from "@/components/projects/ProjectCard.vue";
import { icons } from "@/utils/icons";

const emit = defineEmits([
    "view",
]);

const props = defineProps({

    group: {
        type: Object,
        required: true,
    },

});

const companyIcons = {

    "PT Maxistar Intermoda Indonesia": icons.Building2,

    "PT Ragdalion Revolusi Industri": icons.Smartphone,

    "Personal Project": icons.Laptop,

};

const GroupIcon =
    companyIcons[props.group.company] || icons.BriefcaseBusiness;

</script>

<template>

    <section class="space-y-8">

        <!-- Header -->

        <div class="
                flex
                items-center
                gap-4
            ">

            <div class="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-500/10
                    text-cyan-400
                ">

                <component :is="GroupIcon" class="h-7 w-7" />

            </div>

            <div>

                <h2 class="
                        text-2xl
                        font-bold
                        text-white
                    ">
                    {{ group.company }}
                </h2>

                <p class="
                        mt-1
                        text-slate-400
                    ">
                    {{ group.role }}

                    •

                    {{ group.year }}
                </p>

            </div>

        </div>

        <!-- Projects -->

        <div class="
                grid
                gap-8
                md:grid-cols-2
            ">

            <ProjectCard v-for="project in group.projects" :key="project.id" :project="project" @view="emit('view', $event)"/>

        </div>

    </section>

</template>