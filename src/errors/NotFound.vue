<template>
    <DefaultLayout>
      <section class="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <img
          src="https://i.imgur.com/qIufhof.png"
          alt="404 Not Found"
          class="w-80 mb-8"
        />
        <h1 class="text-5xl font-bold orbitron text-white mb-4">404 - Page Not Found</h1>
        <p class="text-gray-400 mb-8">Oops! The page you are looking for does not exist or has been moved.</p>
        <router-link to="/" class="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 font-orbitron tracking-wide">
          Go Back Home
        </router-link>
      </section>
    </DefaultLayout>
  </template>
  
  <script setup>
  import DefaultLayout from '../layouts/DefaultLayout.vue'
  </script>
  