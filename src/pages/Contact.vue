<template>
  <DefaultLayout>
    <section class="py-20 px-6 bg-black text-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center orbitron">// CONTACT ME</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          <div
            v-for="(item, i) in contacts"
            :key="i"
            class="contact-card bg-[#0f0f0f] p-6 border border-white/10 transition-all shadow-md rounded-lg flex flex-col items-center justify-center cursor-pointer"
            :style="{ '--hover-color': item.color }"
            @mousedown="onCardDown($event, i)"
          >
            <i :class="item.icon + ' text-3xl mb-2'" :style="{ color: item.color }"></i>
            <p class="text-sm text-gray-400">{{ item.label }}</p>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { onMounted, nextTick, ref } from 'vue'
import { gsap } from 'gsap'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import DefaultLayout from '../layouts/DefaultLayout.vue'

gsap.registerPlugin(InertiaPlugin)

const contacts = [
  {
    label: 'Facebook',
    icon: 'fab fa-facebook-f',
    color: '#1877F2',
    url: 'https://facebook.com/michaelmangaoangfb',
  },
  {
    label: 'GitHub',
    icon: 'fab fa-github',
    color: '#ccc',
    url: 'https://github.com/michaelrrrxxz',
  },
  {
    label: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    color: '#0A66C2',
    url: 'https://www.linkedin.com/in/michael-mangaoang-654085325/',
  },
  {
    label: 'YouTube',
    icon: 'fab fa-youtube',
    color: '#FF0000',
    url: '#',
  },
  {
    label: 'TikTok',
    icon: 'fab fa-tiktok',
    color: '#FF0050',
    url: 'https://tiktok.com/@ttmichaelmangaoang',
  },
  {
    label: 'Email',
    icon: 'fas fa-envelope',
    color: '#34D399',
    url: 'mailto:mangaoang.michaelangel023@gmail.com',
  },
]

let isDragging = false
let activeCard = null
let startX = 0
let startY = 0

const onCardDown = (e, index) => {
  const cards = document.querySelectorAll('.contact-card')
  activeCard = cards[index]
  const rect = activeCard.getBoundingClientRect()
  startX = e.clientX - rect.left - rect.width / 2
  startY = e.clientY - rect.top - rect.height / 2
  isDragging = true

  const onMove = (e) => {
    if (!isDragging || !activeCard) return
    const moveX = e.clientX - rect.left - rect.width / 2 - startX
    const moveY = e.clientY - rect.top - rect.height / 2 - startY

    // Move dragged card
    gsap.to(activeCard, {
      x: moveX,
      y: moveY,
      duration: 0.1,
      ease: 'power2.out',
    })

    // Other cards follow slightly
    cards.forEach((card, i) => {
      if (card === activeCard) return

      const otherRect = card.getBoundingClientRect()
      const distX = otherRect.left - rect.left
      const distY = otherRect.top - rect.top
      const distance = Math.sqrt(distX ** 2 + distY ** 2)
      const influence = Math.min(100 / distance, 0.3)

      gsap.to(card, {
        x: moveX * influence,
        y: moveY * influence,
        duration: 0.15,
        ease: 'power2.out',
      })
    })
  }

  const onUp = () => {
    if (!isDragging) return
    isDragging = false

    const cards = document.querySelectorAll('.contact-card')
    cards.forEach(card => {
      gsap.to(card, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'inertia',
        inertia: {
          velocity: { x: 0, y: 0 },
          resistance: 300,
        },
      })
    })

    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', onUp)
  }

  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.contact-card {
  transition: transform 0.2s ease;
  will-change: transform;
  user-select: none;
  z-index: 1;
}
</style>
