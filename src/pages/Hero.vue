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

</script>
