<template>
  <div class="pt-10 pb-10 h-full w-full">
    <div
      class="grid grid-cols-1 xl:grid-cols-5 gap-10 mx-5 md:mx-40 xl:mx-20 m-auto h-full"
    >
      <div :class="videoClass()">
        <iframe
          v-if="project?.video"
          class="w-full h-full"
          :src="project?.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
        <img
          v-else
          class="w-full h-full"
          src="https://storage.googleapis.com/assets.weadapt.digital/placeholders/ByAJ5FcNtBuhSC6PvQFR3MQ9BXr6CrvdtD3H.jpg"
          alt="No video available"
        />
        <div class="m-3">
          <a
            v-if="project?.github"
            :href="project?.github"
            class="inline-block"
            target="_blank"
            ><img
              class="w-10 mr-5"
              title="Go to Github repository"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          /></a>
          <a
            v-if="project?.url"
            :href="project?.url"
            class="inline-block"
            target="_blank"
            ><img
              style="width: 2.35em"
              title="See the project already deployed"
              src="https://www.svgrepo.com/show/59143/internet.svg"
          /></a>
        </div>
      </div>
      <div class="col-span-3 md:col-span-2">
        <h1 class="text-3xl mb-5 font-extrabold">{{ project?.name }}</h1>
        <p class="mb-5">
          {{ project?.description }}
        </p>
        <p class="font-semibold mb-5">Created at: {{ project?.createdAt }}</p>
        <div class="flex flex-wrap gap-2">
          <SkillTag
            v-for="skill of project?.skills"
            :key="skill.id"
            :name="skill.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Project from '~/interfaces/Project'
import { find } from '~/services/Project'

import Loader from '~/assets/img/attach.svg'

const router = useRoute()

onMounted(() => {
  project.value = getProject()
})

const project = ref<Project>()

const videoClass = () =>
  !project.value ? 'col-span-3 sm:mb-10 md:mb-0' : 'col-span-3 mb-10'

const getProject = () => {
  const id = router.params.id
  const project = find(Number(id))
  return project
}
</script>

<style scoped>
@keyframes changewidth {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}

.loader {
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
}
.loader img {
  height: 100px;
  width: 100px;
  animation-duration: 0.5s;
  animation-name: changewidth;
  animation-iteration-count: infinite;
}
</style>
