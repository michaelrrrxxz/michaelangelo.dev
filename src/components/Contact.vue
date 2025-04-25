<template>
    <DefaultLayout>
      <section class="py-20 px-6 bg-black text-white">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8 orbitron">// CONTACT ME</h2>
          <p class="text-gray-400 mb-10">Let's connect and build something awesome together.</p>
  
          <!-- Social Links -->
          <div class="flex justify-center flex-wrap gap-6 text-white text-2xl">
            <a href="https://facebook.com/yourprofile" target="_blank" class="hover:text-blue-500 transition" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://github.com/yourusername" target="_blank" class="hover:text-gray-400 transition" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="hover:text-blue-300 transition" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" class="hover:text-red-500 transition" aria-label="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://tiktok.com/@yourusername" target="_blank" class="hover:text-pink-400 transition" aria-label="TikTok">
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="mailto:you@example.com" class="hover:text-green-400 transition" aria-label="Email">
              <i class="fas fa-envelope"></i>
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
  