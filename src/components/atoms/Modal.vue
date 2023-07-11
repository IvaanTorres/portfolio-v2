<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  },
  subject: {
    type: String,
    required: false
  },
  actions: {
    type: Array<any>,
    required: false
  }
})
</script>

<template>
  <div @click="$emit('onClose')" class="overlay"></div>
  <div class="modal flex flex-col pb-10">
    <!-- Header -->
    <div class="flex-initial w-full flex bg-yellow-100">
      <div class="mr-auto pt-2 pl-4 font-bold">
        {{ title }}
      </div>
      <div class="ml-auto flex">
        <div v-for="action in actions" class="flex items-center">
          <a
            v-if="action.isLink"
            :href="action.link"
            class="inline-block"
            target="_blank"
          >
            <img 
              :src="action.image"
              :alt="action.text"
              class="w-7 mr-5 cursor-pointer"
            />
          </a>
          <div v-else>
            <img 
              :src="action.image"
              :alt="action.text"
              class="w-7 mr-5 cursor-pointer"
            />
          </div>
        </div>
        <div 
          @click="$emit('onClose')" 
          class="flex justify-center items-center cursor-pointer hover:bg-yellow-600 transition ease duration-200 h-10 w-10 bg-yellow-500 text-black font-bold"
        >
          X
        </div>
      </div>
    </div>
    <!-- Content -->
    <div class="flex-auto p-10 overflow-auto">
      <p class="text-center text-4xl font-bold mb-5">{{ subject }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 65vw;
  height: 500px;
  background-color: #fff;
}

.overlay{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
}

@media (max-width: 1280px){
  .modal{
    width: 80vw;
  }
}
</style>