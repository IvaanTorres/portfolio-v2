<template>
  <section id="about" class="md:w-3/4 md:m-auto p-5">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14 sm:pt-10">
      <img
      class="w-full h-full"
        src="../../assets/profile.webp"
        alt="Profile photo"
        width="100%"
        height="100%"
        loading="lazy"
      />
      <div class="flex items-start justify-between flex-col text-sm w-full">
        <div>
          <span data-aos="fade-right" class="font-extrabold">Discover</span>
          <h2 data-aos="fade-right" class="font-extrabold text-2xl mb-4">
            About me
          </h2>
          <p class="font-light mb-6 text-justify">
            Full-Stack developer who is focused on changing the world. <br />
            I got to know this world when I was 16 years old and I immediately
            realized that it was perfect for me since I am someone who considers
            himself self-taught, ambitious and also outgoing.
          </p>
          <hr />
          <div class="grid mt-6 gap-6">
            <div>
              <p data-aos="fade-right" class="font-bold uppercase text-sm mb-1">
                Name
              </p>
              <p>Iván Torres García</p>
            </div>
            <div>
              <p data-aos="fade-right" class="font-bold uppercase text-sm mb-1">
                Email
              </p>
              <a href="mailto:ivantorresgarcia.02@gmail.com" class="font-bold">{{infos?.email}}</a>
            </div>
            <div>
              <p data-aos="fade-right" class="font-bold uppercase text-sm mb-1 font-weight-bolder">
                Linkedin
              </p>
              <a :href="infos?.linkedin" target="_blank" class="font-bold">{{infos?.linkedin}}</a>
            </div>
          </div>
        </div>
        <a
          :href="infos?.cv"
          target="_blank"
          rel="noreferrer"
          class="inline-block mx-auto sm:mx-0 mt-10 px-14 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold ease-in duration-75 rounded-full"
          >Download CV</a
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { getAll } from '~/services/Infos';
  import Info from '~/interfaces/Info';

  onMounted(() => {
    getInfos()
  })

  const infos = ref<Info>()

  const getInfos = () => {
    infos.value = getAll()
  }
</script>
