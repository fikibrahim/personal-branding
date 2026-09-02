<script setup>
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-vue-next";

import SectionWrapper from "@/components/common/SectionWrapper.vue";
import AppContainer from "@/components/common/AppContainer.vue";

import { socials } from "@/data/social";

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    mail: Mail,
};
</script>

<template>

    <SectionWrapper id="contact">

        <AppContainer>

            <div class="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900
                px-6
                py-16
                text-center
                shadow-2xl
                shadow-black/20
                sm:px-10
                lg:px-16
            ">

                <!-- Glow -->

                <div class="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-64
                    w-64
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                "></div>

                <div class="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -left-24
                    h-64
                    w-64
                    rounded-full
                    bg-cyan-500/5
                    blur-3xl
                "></div>

                <!-- Content -->

                <div class="relative z-10 mx-auto max-w-3xl">

                    <!-- Badge -->

                    <span class="
                        inline-flex
                        items-center
                        rounded-full
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        px-4
                        py-1.5
                        text-sm
                        font-semibold
                        text-cyan-400
                    ">
                        Let's Connect
                    </span>

                    <!-- Title -->

                    <h2 class="
                        mt-5
                        text-3xl
                        font-bold
                        tracking-tight
                        text-white
                        sm:text-4xl
                        lg:text-5xl
                    ">
                        Let's Build Something
                        <span class="text-cyan-400">
                            Great Together
                        </span>
                    </h2>

                    <!-- Description -->

                    <p class="
                        mx-auto
                        mt-5
                        max-w-2xl
                        text-base
                        leading-7
                        text-slate-400
                        sm:text-lg
                    ">
                        Have a project, opportunity, or idea in mind?
                        I'd love to hear from you and explore how we
                        can turn it into a meaningful digital solution.
                    </p>

                    <!-- Availability -->

                    <div class="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-emerald-500/20
                        bg-emerald-500/10
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-emerald-400
                    ">

                        <span class="
                            h-2
                            w-2
                            rounded-full
                            bg-emerald-400
                            shadow-sm
                            shadow-emerald-400/50
                        "></span>

                        Available for opportunities

                    </div>

                    <!-- CTA -->

                    <div class="
                        mt-8
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-3
                        sm:flex-row
                    ">

                        <a :href="socials.find(item => item.icon === 'mail')?.url" class="
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-cyan-500
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-slate-950
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-cyan-400
                                hover:shadow-lg
                                hover:shadow-cyan-500/20
                            ">

                            <Mail class="h-4 w-4" />

                            Contact Me

                            <ArrowUpRight class="h-4 w-4" />

                        </a>

                    </div>

                    <!-- Social Links -->

                    <div class="
                        mt-10
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-3
                    ">

                        <a v-for="social in socials" :key="social.name" :href="social.url" :aria-label="social.name"
                            target="_blank" rel="noopener noreferrer" class="
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-700
                                bg-slate-950/60
                                px-4
                                py-2.5
                                text-sm
                                font-medium
                                text-slate-300
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-cyan-400/50
                                hover:bg-slate-800
                                hover:text-cyan-400
                            ">

                            <component :is="socialIcons[social.icon]" class="h-4 w-4" />

                            {{ social.name }}

                        </a>

                    </div>

                </div>

            </div>

        </AppContainer>

    </SectionWrapper>

</template>