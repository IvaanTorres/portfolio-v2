<template>
  <!-- <section id="projects" class="grid grid-cols-1 md:grid-cols-2"> -->
  <section id="projects" class="grid grid-cols-1">
  <div
      class="flex flex-col justify-between text-base py-12 bg-yellow-400 px-5 sm:px-20 text-justify"
    >
      <div>
        <h3 class="text-3xl font-bold mb-5">Web Development</h3> <!-- TODO: Change title -->
        <div class="mb-3">
          It's here where I show all my progress in web development creating
          new projects and challenges.
        </div>
        <div class="mb-3">
          If you're interested, don't hesitate to access and check out the
          specific project on GitHub. <br />
          There's also a link to the project on Internet and a YouTube video where I personally explain how the
          project works and has been created.
        </div>
      </div>
      <div>
        <router-link
          class="inline-block mt-6 bg-black shadow-lg shadow-gray-900 hover:shadow-xl hover:shadow-gray-900 px-10 py-3 rounded-full ease-in duration-150 text-white font-bold"
          to="/projects/web"
          >Open</router-link
        >
      </div>
    </div>
    <!-- TODO: Change the other URL for "/projects/blockchain" -->
    <!-- <div
      class="flex flex-col justify-between py-12 bg-white px-5 sm:px-20 sm:pr-12 border-b-2 border-black sm:border-b-0"
    >
      <div>
        <h3 class="text-3xl font-bold mb-5">Web Design (UX/UI)</h3>
        <div class="mb-3">
          It's in this place where you can check out all my web design projects.
        </div>
        <div class="mb-3">
          If you're interested, don't hesitate to access to the specific project
          on Figma Community. <br />
          There's also a YouTube video where I personally explain how the
          project works and has been created.
        </div>
      </div>
      <div>
        <router-link
          class="inline-block mt-6 bg-black shadow-lg shadow-gray-900 hover:shadow-xl hover:shadow-gray-900 px-10 py-3 rounded-full ease-in duration-150 text-white font-bold"
          to="/projects/design"
          >Open</router-link
        >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          class="w-10 ml-2 inline"
          title="Figma"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg"
          class="w-10 ml-2 bg-amber-900 inline"
          title="Adobe Illustrator"
        />
      </div>
    </div> -->
  </section>
</template>
