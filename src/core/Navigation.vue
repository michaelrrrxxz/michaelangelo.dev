<template>
  <nav class="fixed w-full z-50 bg-black border-b border-gray-800 text-white">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Logo -->
      <router-link to="/" class="text-2xl font-bold orbitron glitch">
        MichaelAngelo.Dev
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8 orbitron tracking-wide">
        <router-link 
          to="/tech" 
          class="hover:text-blue-400 transition" 
          active-class="text-blue-400 font-bold"
        >
          TECH
        </router-link>
        <router-link 
          to="/about" 
          class="hover:text-blue-400 transition" 
          active-class="text-blue-400 font-bold"
        >
          ABOUT
        </router-link>
        <router-link 
          to="/contact" 
          class="hover:text-blue-400 transition" 
          active-class="text-blue-400 font-bold"
        >
          CONTACT
        </router-link>
      </div>

      <!-- Mobile Button -->
      <button @click="toggleMenu" class="md:hidden text-2xl focus:outline-none">
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden px-6 pb-4 space-y-4 bg-black orbitron tracking-wide">
      <router-link 
        to="/tech" 
        class="block hover:text-blue-400 transition" 
        active-class="text-blue-400 font-bold"
        @click="closeMenu"
      >
        TECH
      </router-link>
      <router-link 
        to="/about" 
        class="block hover:text-blue-400 transition" 
        active-class="text-blue-400 font-bold"
        @click="closeMenu"
      >
        ABOUT
      </router-link>
      <router-link 
        to="/contact" 
        class="block hover:text-blue-400 transition" 
        active-class="text-blue-400 font-bold"
        @click="closeMenu"
      >
        CONTACT
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>
