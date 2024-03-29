<template>
  <div
    data-aos="zoom-in-up"
    class="flex flex-col justify-between relative px-9 border-b-2 border-black lg:border-b-0 lg:border-r-2 lg:border-black"
  >
    <h3 class="text-center lg:p-5 mb-5 lg:mb-0 pt-10 text-xl font-bold">
      {{ data.name }}
    </h3>
    <div class="flex flex-wrap justify-center gap-1">
      <SkillTag
        v-for="skill of data.skills
          .sort((a, b) => a.order - b.order)
          .slice(0, 4)"
        :key="skill?.id"
        :name="skill?.name"
        :color="skill?.color"
        :background-color="skill?.backgroundColor"
      />
      <div v-if="data.skills.length > 3">...</div>
    </div>
    <router-link
      class="inline mt-8 bg-gray-800 hover:bg-gray-900 px-10 py-2 text-white text-sm m-auto mb-10 lg:mb-5 rounded-full"
      :to="getProjectUrl(data.id)"
      >Open</router-link
    >
    <img src="/src/assets/attach.svg" alt="lock-divider" :class="setClass()" />
  </div>
</template>

<script lang="ts" setup>
//! INTERFACES
import { PropType } from 'vue'
import Project from '~/interfaces/Project'

const router = useRoute()

const props = defineProps({
  data: {
    type: Object as PropType<Project>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  last: {
    type: Number,
    required: true,
  },
})

const projectList = () => {
  return (
    router.fullPath === '/projects/dev' ||
    router.fullPath === '/projects/design'
  )
}

const getProjectUrl = (id: number) => {
  return props.data.type === 'web2'
    ? '/projects/web/' + id
    : '/projects/blockchain/' + id
}

//! ERROR: THE LOCK ISN'T UPDATING AUTO ITS DISPLAY WHEN CHANGING THE WINDOW WIDTH
const setClass = () => {
  if (isLg.value) {
    if (isMultipleOf(3)) {
      return 'hidden w-16 absolute bottom-0 left-1/2 -ml-8 translate-y-8 rotate-90 lg:bottom-1/2 lg:left-full lg:-mt-8 lg:rotate-180'
    } else {
      return 'w-16 absolute bottom-0 left-1/2 -ml-8 translate-y-8 rotate-90 lg:bottom-1/2 lg:left-full lg:-mt-8 lg:rotate-180'
    }
  } else {
    if (props.index === props.last - 1) {
      return 'hidden w-16 absolute bottom-0 left-1/2 -ml-8 translate-y-8 rotate-90 lg:bottom-1/2 lg:left-full lg:-mt-8 lg:rotate-180'
    } else {
      return 'w-16 absolute bottom-0 left-1/2 -ml-8 translate-y-8 rotate-90 lg:bottom-1/2 lg:left-full lg:-mt-8 lg:rotate-180'
    }
  }
}

const isMultipleOf = (num: any) => {
  return (props.index + 1) % num === 0
}

const windowWidth = ref(window.innerWidth)
let isLg = ref(windowWidth.value >= 1024)

onMounted(() => {
  window.onresize = () => {
    windowWidth.value = window.innerWidth
    setClass()
  }
})
</script>
