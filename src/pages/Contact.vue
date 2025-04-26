<template>
  <DefaultLayout>
    <section class="py-20 px-6 bg-black text-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center orbitron">// CONTACT ME</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          <!-- Facebook -->
          <a href="https://facebook.com/michaelmanagaoangfb" target="_blank" class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-blue-400 transition-all shadow-md hover:shadow-blue-500/20 rounded-lg flex flex-col items-center justify-center">
            <i class="fab fa-facebook-f text-3xl mb-2 hover:text-blue-400"></i>
            <p class="text-sm text-gray-400">Facebook</p>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/michaelrrrxxz" target="_blank" class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-gray-400 transition-all shadow-md hover:shadow-gray-500/20 rounded-lg flex flex-col items-center justify-center">
            <i class="fab fa-github text-3xl mb-2 hover:text-gray-400"></i>
            <p class="text-sm text-gray-400">GitHub</p>
          </a>

          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/michael-mangaoang-654085325/" target="_blank" class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-blue-300 transition-all shadow-md hover:shadow-blue-300/20 rounded-lg flex flex-col items-center justify-center">
            <i class="fab fa-linkedin-in text-3xl mb-2 hover:text-blue-300"></i>
            <p class="text-sm text-gray-400">LinkedIn</p>
          </a>

          <!-- YouTube -->
          <a href="#" target="_blank" class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-red-500 transition-all shadow-md hover:shadow-red-500/20 rounded-lg flex flex-col items-center justify-center">
            <i class="fab fa-youtube text-3xl mb-2 hover:text-red-500"></i>
            <p class="text-sm text-gray-400">YouTube</p>
          </a>

          <!-- TikTok -->
          <a href="https://tiktok.com/@ttmichaelmangaoang" target="_blank" class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-pink-400 transition-all shadow-md hover:shadow-pink-400/20 rounded-lg flex flex-col items-center justify-center">
            <i class="fab fa-tiktok text-3xl mb-2 hover:text-pink-400"></i>
            <p class="text-sm text-gray-400">TikTok</p>
          </a>

          <!-- Email -->
          <a href="mailto:mangaoang.michaelangel023@gmail.com" class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-green-400 transition-all shadow-md hover:shadow-green-400/20 rounded-lg flex flex-col items-center justify-center">
            <i class="fas fa-envelope text-3xl mb-2 hover:text-green-400"></i>
            <p class="text-sm text-gray-400">Email</p>
          </a>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
