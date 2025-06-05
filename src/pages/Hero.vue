<template>
  <DefaultLayout>
    <section class="min-h-screen flex flex-col items-center justify-center px-6 relative bg-black text-white overflow-hidden">
      <div class="text-center" ref="container">
        <!-- Draggable Avatar -->
        <div
          ref="avatar"
          class="avatar w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 rounded-full border-4 border-white shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img src="/src/assets/image.png" alt="MichaelAngelo" class="w-full h-full object-cover" />
        </div>

        <!-- Typewriter -->
        <h1 ref="title" class="text-4xl md:text-6xl font-bold mb-4 font-orbitron">
          <span class="typewriter font-bold orbitron glitch">MICHAELANGELO.DEV</span>
        </h1>

        <p ref="subtitle" class="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-4">Web Developer</p>

        <!-- Random song lyric -->
        <p ref="lyric" class="text-md md:text-lg italic text-gray-500 mb-8">
          "{{ randomLyric }}"
        </p>

        <div ref="button" class="mt-6">
          <router-link to="/explore" class="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-orbitron tracking-wide">
            Explore
          </router-link>
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

// Song Lyrics Array
const lyrics = [
  "🎵 I'm on the pursuit of happiness...",
  "🎵 Lose yourself in the music, the moment...",
  "🎵 Started from the bottom, now we here.",
  "🎵 I got the eye of the tiger, a fighter.",
  "🎵 We're up all night to get lucky!",
  "🎵 Hello from the other side!",
  "🎵 Shine bright like a diamond.",
  "🎵 Can't stop the feeling!",
]
const randomLyric = ref(lyrics[Math.floor(Math.random() * lyrics.length)])

// Refs for elements to animate
const avatar = ref(null)
const title = ref(null)
const subtitle = ref(null)
const lyric = ref(null)
const button = ref(null)

onMounted(() => {
  nextTick(() => {
    const avatarEl = avatar.value
    const influenceEls = [title.value, subtitle.value, lyric.value, button.value]

    let isDragging = false
    let offsetX = 0
    let offsetY = 0

    const onMouseMove = (e) => {
      if (!isDragging) return

      const rect = avatarEl.getBoundingClientRect()
      offsetX = e.clientX - (rect.left + rect.width / 2)
      offsetY = e.clientY - (rect.top + rect.height / 2)

      // Move avatar
      gsap.to(avatarEl, {
        x: offsetX,
        y: offsetY,
        duration: 0.1,
        ease: 'power2.out',
      })

      // Pull nearby elements based on distance
      influenceEls.forEach((el) => {
        const elRect = el.getBoundingClientRect()
        const distX = (elRect.left + elRect.width / 2) - (rect.left + rect.width / 2)
        const distY = (elRect.top + elRect.height / 2) - (rect.top + rect.height / 2)
        const distance = Math.sqrt(distX ** 2 + distY ** 2)

        const influence = Math.min(100 / distance, 0.3)

        gsap.to(el, {
          x: offsetX * influence,
          y: offsetY * influence,
          duration: 0.15,
          ease: 'power2.out',
        })
      })
    }

    const onMouseUp = () => {
      if (!isDragging) return
      isDragging = false

      // Snap avatar and others back with inertia
      gsap.to(avatarEl, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'inertia',
        inertia: {
          velocity: { x: offsetX, y: offsetY },
          resistance: 300,
        },
      })

      influenceEls.forEach(el => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 1.2,
          ease: 'inertia',
          inertia: {
            velocity: { x: offsetX * 0.2, y: offsetY * 0.2 },
            resistance: 300,
          },
        })
      })

      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    avatarEl.addEventListener('mousedown', () => {
      isDragging = true
      offsetX = 0
      offsetY = 0

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    })
  })
})
</script>

<style scoped>
.avatar {
  will-change: transform;
  user-select: none;
  z-index: 10;
  transition: transform 0.2s ease;
}
</style>
