<template>
  <div>
    <a
      target="_blank"
      :href="data.link"
      class="hover:text-gray-700 ease-in duration-100 text-5xl sm:text-6xl"
      rel="noreferrer"
      >
      <svg-icon type="mdi" :path="data.icon" class="h-12 w-12 sm:h-20 sm:w-20" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import SvgIcon from '@jamescoyle/vue-icon'

const props = defineProps({
  data: {
    type: Object as PropType<any>,
    require: true,
  },
});
</script>
