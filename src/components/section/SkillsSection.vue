<script setup>
import { ref, onMounted } from "vue";

import SectionTitle from "@/components/common/SectionTitle.vue";
import SectionWrapper from "@/components/common/SectionWrapper.vue";
import AppContainer from "@/components/common/AppContainer.vue";
import SkillCard from "@/components/skill/SkillCard.vue";

import { skillCategories } from "@/data/skills";

const section = ref(null);
const animate = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                animate.value = true;
                observer.disconnect();
            }
        },
        {
            threshold: 0.3,
        }
    );

    if (section.value) {
        observer.observe(section.value);
    }
});
</script>

<template>
    <SectionWrapper>
        <AppContainer>
            <section ref="section" id="skills" class="min-w-0">
                <SectionTitle badge="My Skills" title="Technical Skills"
                    description="Technologies, frameworks, and tools that I use to build modern web and mobile applications." />

                <div class="mt-12 grid min-w-0 gap-6 sm:mt-16 md:grid-cols-2 md:gap-8">
                    <SkillCard v-for="category in skillCategories" :key="category.id" :title="category.title"
                        :icon="category.icon" :description="category.description" :skills="category.skills"
                        :animate="animate" />
                </div>
            </section>
        </AppContainer>
    </SectionWrapper>
</template>