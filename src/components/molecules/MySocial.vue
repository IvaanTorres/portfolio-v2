<template>
  <section class="p-10 px-5 sm:px-10 md:px-16 flex justify-between bg-gray-200">
    <div
      v-for="infos of infosGroup"
      :key="infos.id"
      class="flex gap-5 justify-around w-3/4 text-6xl text-gray-500"
    >
      <Social :data="infos" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { getAll } from '~/services/Infos'
import { mdiLinkedin, mdiGithub, mdiDevTo, mdiEmail } from '@mdi/js'

const infosGroup = [
  {
    id: 1,
    name: 'Linkedin',
    link: getAll().linkedin,
    user: 'Iván Torres García',
    icon: mdiLinkedin,
  },
  {
    id: 2,
    name: 'GitHub',
    link: getAll().github,
    user: 'IvaanTorres',
    icon: mdiGithub,
  },
  /* TODO: Add in case */
  /* {
    id: 3,
    name: "Dev.to",
    link: getAll().devto,
    user: "ivaantorres",
    icon: mdiDevTo,
  }, */
  {
    id: 4,
    name: 'Email',
    link: `mailto:${getAll().email}`,
    user: getAll().email,
    icon: mdiEmail,
  },
]
</script>
