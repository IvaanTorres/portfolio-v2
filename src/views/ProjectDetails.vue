<template>
  <div class="h-full">
    <div class="pt-10 pb-10 h-full w-full">
      <div
        class="grid grid-cols-1 xl:grid-cols-5 gap-10 mx-5 md:mx-40 xl:mx-20 m-auto h-full"
      >
        <div :class="videoClass">
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
          <!-- <img
            v-else
            class="w-full h-auto aspect-square object-cover"
            src="../assets/in-development.jpg"
            alt="No video available"
          /> -->
          <div class="h-60 md:h-auto flex flex-col items-center justify-center bg-blue-100 min-h-full" v-else>
            <img
              class="w-40 md:w-75 h-auto aspect-square object-cover"
              src="../assets/dev-icon.png"
              alt="No video available"
            />
            <p class="mt-5 md:mt-20 text-4xl font-extrabold">Soon available...</p>
          </div>
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
                title="Go to project in production"
                src="https://www.svgrepo.com/show/59143/internet.svg"
            /></a>
          </div>
        </div>
        <div class="flex flex-col justify-between col-span-3 md:col-span-2">
          <!-- Project info -->
          <div>
            <h1 class="text-3xl mb-5 font-extrabold">{{ project?.name }}</h1>
            <div class="flex flex-col mb-5">
              <div class="description" ref="description">
                <div>{{ project?.description }}</div>
              </div>
              <button 
                v-if="isDescriptionOverflow && windowWidth >= 1280" 
                :onclick="toggleModal"
                class="ml-auto mt-3 px-5 py-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold ease-in duration-75 rounded-full"
              >See more</button>
            </div>
          </div>
          <!-- Data/state and skills -->
          <div>
            <p class="font-semibold mb-5">Created at: {{ project?.createdAt }}</p>
            <div class="flex flex-wrap gap-2">
              <SkillTag
                v-for="skill of project?.skills"
                :key="skill.id"
                :name="skill.name"
                :color="skill.color"
                :background-color="skill.backgroundColor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal 
      v-if="isModalActive"
      @onClose="toggleModal" 
      :title="project.name"
      :description="project.description"
      subject="Description"
      :actions="[
        {
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          link: project.github,
          isLink: true,
          text: 'Go to Github repository',
        },
        {
          image: 'https://www.svgrepo.com/show/59143/internet.svg',
          link: project.url,
          isLink: true,
          text: 'Go to project in production'
        }
      ]"
    />
  </div>
</template>

<script lang="ts" setup>
import Project from '~/interfaces/Project'
import { find } from '~/services/Project'

import Loader from '~/assets/img/attach.svg'

const router = useRoute()
const id = router.params.id

const project = ref<any>(find(Number(id)))
const description = ref<any>(null)
const isDescriptionOverflow = ref(false)
const windowWidth = ref(window.innerWidth)
const isModalActive = ref(false)

watch(isModalActive, () => {
  console.log('isModalActive', isModalActive.value);
})

watchEffect(() => {
  if(description.value){
    const child = description.value.firstChild
    if(child){
      if(child.textContent?.length > 500){
        isDescriptionOverflow.value = true
      }
    }
  }
})

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

const toggleModal = () => {
  isModalActive.value = !isModalActive.value
}

const videoClass = !project.value ? 'col-span-3 sm:mb-10 md:mb-0' : 'col-span-3 mb-10'

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

@media screen and (min-width: 1280px) {
  .description {
    display: -webkit-box;
    -webkit-line-clamp: 12;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
}
</style>
