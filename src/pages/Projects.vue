<template>
  <DefaultLayout>
    <section class="py-20 px-6 bg-black text-white">
      <div class="max-w-3xl mx-auto">
        <!-- Header stays at normal top position -->
        <h2 class="text-4xl font-bold mb-12 text-center orbitron tracking-widest">// PROJECTS</h2>

        <!-- Centered single card -->
        <div class="flex justify-center space-x-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="project-card bg-[#111] p-8 border border-white/10 hover:border-white/30 transition-all duration-300 shadow hover:shadow-white/10 rounded-2xl text-center hover:bg-[#1a1a1a] w-full max-w-md cursor-pointer select-none"
            @mousedown="onCardDown($event, index)"
          >
            <h3 class="text-2xl font-semibold orbitron text-white mb-3">
              {{ project.name }}
            </h3>
            <p class="text-base text-gray-400 leading-relaxed">
              {{ project.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { gsap } from 'gsap'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import DefaultLayout from '../layouts/DefaultLayout.vue'

gsap.registerPlugin(InertiaPlugin)

const projects = [
  {
    name: 'NCSAT',
    desc: 'School Ability Testing',
  },
  {
    name:'GYM Management System',
    desc:'A web-based application for managing gym memberships, schedules, and payments.',
  }
]

let isDragging = false
let activeCard = null
let startX = 0
let startY = 0

const onCardDown = (e, index) => {
  const cards = document.querySelectorAll('.project-card')
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

    const cards = document.querySelectorAll('.project-card')
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
.project-card {
  will-change: transform;
  user-select: none;
  z-index: 1;
  cursor: grab;
}
.project-card:active {
  cursor: grabbing;
}
</style>
