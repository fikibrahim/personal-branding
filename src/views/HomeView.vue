<script setup>
import { ref, computed } from "vue";

import DefaultLayout from "@/layouts/DefaultLayout.vue";

import HeroSection from "@/components/hero/HeroSection.vue";
import AboutSection from "@/components/about/AboutSection.vue";
import ExperienceSection from "@/components/experience/ExperienceSection.vue";
import SkillsSection from "@/components/section/SkillsSection.vue";
import ProjectsSection from "@/components/section/ProjectsSection.vue";
import ContactSection from "@/components/contact/ContactSection.vue";

import FeaturedCard from "@/components/projects/FeaturedCard.vue";
import ProjectModal from "@/components/projects/ProjectModal.vue";

import { projects } from "@/data/projects";

/*
|--------------------------------------------------------------------------
| Featured Projects
|--------------------------------------------------------------------------
*/

const featuredProjects = computed(() => {

  return projects.filter(
    project => project.featured === true
  );

});

/*
|--------------------------------------------------------------------------
| Project Modal
|--------------------------------------------------------------------------
*/

const selectedProject = ref(null);

const showModal = ref(false);

function openProject(project) {

  selectedProject.value = project;

  showModal.value = true;

}

function closeProject() {

  showModal.value = false;

  selectedProject.value = null;

}
</script>

<template>

  <DefaultLayout>

    <section>

      <!-- ===================================================== -->
      <!-- Hero -->
      <!-- ===================================================== -->

      <HeroSection />

      <!-- ===================================================== -->
      <!-- About -->
      <!-- ===================================================== -->

      <AboutSection />

      <!-- ===================================================== -->
      <!-- Experience -->
      <!-- ===================================================== -->

      <ExperienceSection />

      <!-- ===================================================== -->
      <!-- Skills -->
      <!-- ===================================================== -->

      <SkillsSection />

      <!-- ===================================================== -->
      <!-- Featured Projects -->
      <!-- ===================================================== -->

      <section id="featured-projects" class="py-24">

        <div class="
                        mx-auto
                        max-w-7xl
                        px-6
                        lg:px-8
                    ">

          <!-- Section Header -->

          <div class="mb-12 text-center">

            <span class="
                                inline-flex
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
              Portfolio
            </span>

            <h2 class="
                                mt-4
                                text-3xl
                                font-bold
                                text-white
                                md:text-4xl
                            ">
              Featured Projects
            </h2>

            <p class="
                                mx-auto
                                mt-4
                                max-w-2xl
                                leading-7
                                text-slate-400
                            ">
              A selection of projects that showcase my
              experience in web, mobile, and full-stack
              development.
            </p>

          </div>

          <!-- Featured Projects -->

          <div class="space-y-10">

            <FeaturedCard v-for="project in featuredProjects" :key="project.id" :project="project"
              @view="openProject" />

          </div>

        </div>

      </section>

      <!-- ===================================================== -->
      <!-- All Projects -->
      <!-- ===================================================== -->

      <ProjectsSection />

      <ContactSection />

      <!-- ===================================================== -->
      <!-- Project Modal -->
      <!-- ===================================================== -->

      <ProjectModal :show="showModal" :project="selectedProject" @close="closeProject" />

    </section>

  </DefaultLayout>

</template>