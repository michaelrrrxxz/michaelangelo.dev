<template>
  <nav class="fixed w-full z-50 bg-black border-b border-gray-800 text-white">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Logo -->
      <router-link to="/" class="text-2xl font-bold orbitron glitch">
        MichaelAngelo.Dev
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8 orbitron tracking-wide">
        <div
            v-for="(nav, index) in navigation"
            :key="index"
        >
          <router-link 
            :to="nav.url" 
            class="hover:text-blue-400 transition" 
            active-class="text-blue-400 font-bold"
          >
            {{ nav.label.toUpperCase() }}
          </router-link>
        </div>
      </div>

      <!-- Mobile Button -->
      <button @click="toggleMenu" class="md:hidden text-2xl focus:outline-none">
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen"
      v-for="(nav, index) in navigation"
      :key="index"
     class="md:hidden px-6 pb-4 space-y-4 bg-black orbitron tracking-wide">
      <router-link 
        :to="nav.url" 
        class="block hover:text-blue-400 transition" 
        active-class="text-blue-400 font-bold"
        @click="closeMenu"
      >
        {{ nav.label.toUpperCase() }}
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

const navigation = [
  {
    label: 'about',
    url: '/about',
  },
  {
    label: 'tech stack',
    url: '/tech',
  },
  {
    label: 'projects',
    url: '/projects',
  },
  {
    label: 'contact',
    url: '/contact',
  },
];

</script>
