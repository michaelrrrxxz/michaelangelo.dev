<template>
  <DefaultLayout>
    <section class="min-h-screen flex flex-col items-center justify-center px-6 relative bg-black text-white overflow-hidden">
      <div class="text-center">
        <div class="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 rounded-full border-4 border-white shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
          <img src="/src/assets/image.png" alt="MichaelAngelo" class="w-full h-full object-cover" />
        </div>

        <!-- Typewriter -->
        <h1 class="text-4xl md:text-6xl font-bold mb-4 font-orbitron">
          <span class="typewriter font-bold orbitron glitch">MICHAELANGELO.DEV</span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-4">Web Developer</p>

        <!-- Random song lyric -->
        <p class="text-md md:text-lg italic text-gray-500 mb-8">
          "{{ randomLyric }}"
        </p>

        <div class="mt-6">
          <router-link to="/" class="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-orbitron tracking-wide">
            Explore
          </router-link>
        </div>

        <!-- Simple Game Section -->
        <div class="mt-16">


          <div v-if="!gameOver">
            <p class="text-gray-400 mb-6">Click the circle! Score: {{ score }}</p>

            <div
              v-if="showCircle"
              :style="{ top: circleY + 'px', left: circleX + 'px' }"
              class="w-10 h-10 bg-blue-500 rounded-full absolute cursor-pointer transition-all duration-300 hover:scale-110"
              @click="handleCircleClick"
            ></div>
          </div>

          <div v-else>
            <p class="text-red-500 text-2xl font-bold mb-4">Game Over!</p>
            <p class="text-gray-400 mb-6">Your Final Score: {{ score }}</p>
            <button @click="restartGame" class="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300 font-orbitron tracking-wide">
              Restart
            </button>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

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

// Random lyric on load
const randomLyric = ref(lyrics[Math.floor(Math.random() * lyrics.length)])

// Game Logic
const score = ref(0)
const showCircle = ref(true)
const circleX = ref(100)
const circleY = ref(100)
const gameOver = ref(false)
let circleTimer = null
let currentSpeed = ref(2000) // 2 seconds to start

function moveCircle() {
  const windowWidth = window.innerWidth - 50
  const windowHeight = window.innerHeight - 50
  circleX.value = Math.random() * windowWidth
  circleY.value = Math.random() * windowHeight

  clearTimeout(circleTimer)
  circleTimer = setTimeout(() => {
    showCircle.value = false
    gameOver.value = true
  }, currentSpeed.value)
}

function handleCircleClick() {
  score.value++
  if (currentSpeed.value > 600) {
    currentSpeed.value -= 100 // Faster every click (min 600ms)
  }
  moveCircle()
}

function restartGame() {
  score.value = 0
  currentSpeed.value = 2000
  gameOver.value = false
  showCircle.value = true
  moveCircle()
}

onMounted(() => {
  moveCircle()
})
</script>
