<template>
    <nav class="fixed w-full z-50 bg-black border-b border-gray-800">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold orbitron glitch">MichaelAngelo.Dev</router-link>
        <div class="hidden md:flex space-x-8">
          <router-link to="/tech" class="hover:text-gray-400 transition">Tech</router-link>
          <router-link to="/about" class="hover:text-gray-400 transition">ABOUT</router-link>
          <router-link to="/contact" class="hover:text-gray-400 transition">CONTACT</router-link>
        </div>
        <button class="md:hidden">☰</button>
      </div>
    </nav>
  </template>
  