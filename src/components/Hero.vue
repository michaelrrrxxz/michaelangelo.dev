<template>
    <DefaultLayout>
      <section class="min-h-screen flex items-center justify-center px-6 relative bg-black text-white">
        <div class="text-center">
          <div class="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 rounded-full border-4 border-white shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src="/src/assets/image.png" alt="MichaelAngelo" class="w-full h-full object-cover" />
          </div>
  
          <!-- Typewriter -->
          <h1 class="text-4xl md:text-6xl font-bold mb-4 font-orbitron">
            <span class="typewriter font-bold orbitron glitch">MICHAELANGELO.DEV</span>
          </h1>
  
          <p class="text-xl md:text-2xl text-gray-400 font-light tracking-wide">Web Developer</p>
  
          <div class="mt-12">
            <a href="#work" class="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-orbitron tracking-wide">
              Explore
            </a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import DefaultLayout from '../layouts/DefaultLayout.vue'
  
  const typedText = ref('')
  const text = "HELLO, I'M MICHAELANGELO.DEV!"
  
  onMounted(() => {
    let i = 0
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        typedText.value += text[i]
        i++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)
  })
  </script>
  