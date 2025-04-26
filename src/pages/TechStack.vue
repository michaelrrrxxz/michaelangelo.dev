<template>
  <DefaultLayout>
    <section class="py-20 px-6 bg-black text-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center orbitron">// TECH STACK</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div 
            v-for="(tech, index) in techStack" 
            :key="index"
            class="bg-[#111] p-6 border border-white/10 hover:border-white/30 transition-all shadow-md hover:shadow-white/10 rounded-lg flex flex-col items-center"
          >
            <img :src="tech.img" :alt="tech.name" class="w-12 h-12 mb-4" />
            <h3 class="text-lg font-bold orbitron mb-2">{{ tech.name }}</h3>
            <p class="text-sm text-gray-400">{{ tech.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'

const techStack = [
  {
    name: 'Tailwind CSS',
    desc: 'Utility-first styling',
    img: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },
  {
    name: 'JavaScript',
    desc: 'Frontend logic & interactivity',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Vue.js',
    desc: 'Reactive components',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'Laravel',
    desc: 'Backend framework',
    img: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
  },
  {
    name: 'MySQL',
    desc: 'Relational database',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Git',
    desc: 'Version control',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
]
</script>
<style scoped>
img {
  filter: grayscale(100%) brightness(120%) contrast(90%);
  transition: filter 0.3s;
}
img:hover {
  filter: grayscale(0%) brightness(130%) contrast(100%);
}
</style>

