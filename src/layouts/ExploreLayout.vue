
<template>
    <div class="min-h-screen flex flex-col">

      
      <main class="flex-1">
        <slot />
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>

  import Footer from '../core/Footer.vue'
  </script>
  