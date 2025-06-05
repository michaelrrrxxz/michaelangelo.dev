<template>
  <DefaultLayout>
    <section class="py-20 px-6 bg-black text-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center orbitron">// TECH STACK</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div 
            v-for="(tech, index) in techStack" 
            :key="index"
            class="tech bg-[#111] p-6 border border-white/10 hover:border-white/30 transition-all shadow-md hover:shadow-white/10 rounded-lg flex flex-col items-center cursor-pointer select-none"
          >
            <img :src="tech.img" :alt="tech.name" class="w-12 h-12 mb-4" />
            <h3 class="text-lg font-bold orbitron mb-2">
              <a 
                :href="tech.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="hover:underline text-white"
              >
                {{ tech.name }}
              </a>
            </h3>
            <p class="text-sm text-gray-400">{{ tech.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { gsap } from 'gsap'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

gsap.registerPlugin(InertiaPlugin)

const techStack = [
  {
    name: 'Tailwind CSS',
    desc: 'Utility-first styling',
    img: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    url: 'https://tailwindcss.com',
  },
  {
    name: 'JavaScript',
    desc: 'Frontend logic & interactivity',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Vue.js',
    desc: 'Reactive components',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    url: 'https://vuejs.org',
  },
  {
    name: 'Laravel',
    desc: 'Backend framework',
    img: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg',
    url: 'https://laravel.com',
  },
  {
    name: 'MySQL',
    desc: 'Relational database',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    url: 'https://www.mysql.com',
  },
  {
    name: 'Git',
    desc: 'Version control',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    url: 'https://git-scm.com',
  },
  {
    name: 'AdonisJS',
    desc: 'Node.js MVC framework',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg',
    url: 'https://adonisjs.com',
  },
  {
    name: 'Inertia.js',
    desc: 'SPA glue for classic server frameworks',
    img: 'https://inertiajs.com/favicon.ico',
    url: 'https://inertiajs.com',
  },
  {
    name: 'GitHub',
    desc: 'Code hosting and collaboration platform',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    url: 'https://github.com',
  },
]

onMounted(() => {
  nextTick(() => {
    const cards = document.querySelectorAll('.tech')
    let isDragging = false
    let offsetX = 0
    let offsetY = 0
    let activeCard = null

    const onMouseMove = (e) => {
      if (!isDragging || !activeCard) return

      const rect = activeCard.getBoundingClientRect()
      offsetX = e.clientX - (rect.left + rect.width / 2)
      offsetY = e.clientY - (rect.top + rect.height / 2)

      // Move active card
      gsap.to(activeCard, {
        x: offsetX,
        y: offsetY,
        duration: 0.15,
        ease: 'power2.out',
      })

      // Move other cards slightly based on distance
      cards.forEach(card => {
        if (card === activeCard) return

        const otherRect = card.getBoundingClientRect()
        const distX = (otherRect.left + otherRect.width / 2) - (rect.left + rect.width / 2)
        const distY = (otherRect.top + otherRect.height / 2) - (rect.top + rect.height / 2)
        const distance = Math.sqrt(distX ** 2 + distY ** 2)

        const influence = Math.min(100 / distance, 0.3) // limit influence

        gsap.to(card, {
          x: offsetX * influence,
          y: offsetY * influence,
          duration: 0.2,
          ease: 'power2.out',
        })
      })
    }

    const onMouseUp = () => {
      if (!isDragging || !activeCard) return
      isDragging = false

      // Snap everything back
      cards.forEach(card => {
        gsap.to(card, {
          x: 0,
          y: 0,
          duration: 1,
          ease: 'inertia',
          inertia: {
            velocity: { x: offsetX, y: offsetY },
            resistance: 300,
          },
        })
      })

      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    cards.forEach(card => {
      card.addEventListener('mousedown', () => {
        isDragging = true
        activeCard = card
        offsetX = 0
        offsetY = 0

        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseup', onMouseUp)
      })
    })
  })
})
</script>

<style scoped>
img {
  filter: grayscale(100%) brightness(120%) contrast(90%);
  transition: filter 0.3s;
}
img:hover {
  filter: grayscale(0%) brightness(130%) contrast(100%);
}
.tech {
  transition: transform 0.2s ease;
  will-change: transform;
  user-select: none;
  position: relative;
  z-index: 1;
}
</style>
