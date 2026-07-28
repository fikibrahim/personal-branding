<script setup>
import AppContainer from "@/components/common/AppContainer.vue";
import SectionWrapper from "@/components/common/SectionWrapper.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";
import AboutHighlights from "./AboutHighlights.vue";

import AboutImage from "./AboutImage.vue";
import AboutContent from "./AboutContent.vue";
</script>

<template>
    <SectionWrapper>
        <AppContainer>

            <SectionTitle badge="About Me" title="Building Digital Solutions with Passion"
                subtitle="Perjalanan saya dari dunia hospitality menuju software development dan pendidikan teknologi."
                align="center" />

            <div class="mt-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <AboutImage />

                <AboutContent />
            </div>

            <AboutHighlights />

        </AppContainer>
    </SectionWrapper>
</template>