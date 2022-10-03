<template>
  <div class="w-full pt-10">
    <h1 class="text-center font-extrabold text-3xl">{{ title }}</h1>
    <div v-if="projects.length === 0" class="text-center mt-10 mx-5">
      <div>Projects comming soon !</div>
    </div>
    <div class="main-projects p-5 mx-5 md:mx-20 md:p-12 mt-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 bg-white">
        <Project
          v-for="(project, index) of projects"
          :key="project?.id"
          :index="index"
          :data="project"
          :last="projects?.length"
        />
      </div>
    </div>
  </div>
  <p class="font-extrabold text-4xl text-center p-5">...</p>
</template>

<script lang="ts" setup>
//! INTERFACES
import ProjectInt from '~/interfaces/Project'
//! SERVICES
import { filterByType } from '~/services/Project'

const router = useRoute()

onMounted(() => {
  setTitle()
  setProjects()
})

const title = ref<string>('')
const projects = ref<ProjectInt[]>([])

const setTitle = () => {
  title.value = isWeb2() ? 'Web Development' : 'Web 3.0 / Blockchain'
}

const setProjects = async () => {
  const projectsList = filterByType(isWeb2() ? 'web2' : 'web3')
  projects.value = projectsList
}

const isWeb2 = () => router.fullPath === '/projects/web'
</script>

<style scoped>
.main-projects {
  background-color: #facc15;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
