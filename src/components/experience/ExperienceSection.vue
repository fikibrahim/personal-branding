<script setup>
import AppContainer from "@/components/common/AppContainer.vue";
import SectionWrapper from "@/components/common/SectionWrapper.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";

import ExperienceTimeline from "./ExperienceTimeline.vue";
</script>

<template>
    <SectionWrapper id="experience">
        <AppContainer>
            <SectionTitle badge="Experience" title="My Professional Journey"
                subtitle="Perjalanan karier yang membentuk kemampuan teknis, komunikasi, dan semangat belajar saya."
                align="center" />

            <div class="min-w-0">
                <ExperienceTimeline />
            </div>
        </AppContainer>
    </SectionWrapper>
</template>