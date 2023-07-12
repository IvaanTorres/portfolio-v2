<template>
  <span class="tag px-3 py-1 text-xs font-semibold bg-blue-400 rounded-full">{{
    name
  }}</span>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  backgroundColor: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.tag {
  color: v-bind(color);
  background-color: v-bind(backgroundColor);
}
</style>