
<template>
    <div class="min-h-screen flex flex-col">
      <Navigation />
      
      <main class="flex-1">
        <slot />
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navigation from '../components/Navigation.vue'
  import Footer from '../components/Footer.vue'
  </script>
  