<template>
  <section class="mt-10">
    <h2 class="font-bold text-3xl text-center">Main Projects</h2>
    <div class="main-projects mx-5 sm:mx-20 m-auto p-5 sm:p-14 mt-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 bg-white">
        <Project
          v-for="(project, index) of featuredProjects"
          :key="index"
          :index="index"
          :data="project"
          :last="featuredProjects.length"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
//! INTERFACES
import ProjectInt from '~/interfaces/Project'
//! SERVICES
import { getFeatured } from '~/services/Project'

onMounted(() => {
  setProjects()
})

const featuredProjects = ref<ProjectInt[]>([])

const setProjects = () => {
  const projectsList = getFeatured()
  featuredProjects.value = projectsList
}
</script>

<style scoped>
.main-projects {
  background-color: #facc15;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
