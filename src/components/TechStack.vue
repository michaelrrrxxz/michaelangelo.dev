<template>
    <DefaultLayout>
      <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center orbitron" href="/">// TECH STACK</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
        <!-- Repeat cards -->
        <div class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-blue-400 transition-all shadow-md hover:shadow-blue-500/20 rounded-lg">
          <h3 class="text-lg font-bold orbitron mb-2">Tailwind CSS</h3>
          <p class="text-sm text-gray-400">Utility-first styling</p>
        </div>
        <div class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-blue-400 transition-all shadow-md hover:shadow-blue-500/20 rounded-lg">
          <h3 class="text-lg font-bold orbitron mb-2">JavaScript</h3>
          <p class="text-sm text-gray-400">Frontend logic & interactivity</p>
        </div>
        <div class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-blue-400 transition-all shadow-md hover:shadow-blue-500/20 rounded-lg">
          <h3 class="text-lg font-bold orbitron mb-2">Vue.js</h3>
          <p class="text-sm text-gray-400">Reactive components</p>
        </div>
        <div class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-blue-400 transition-all shadow-md hover:shadow-blue-500/20 rounded-lg">
          <h3 class="text-lg font-bold orbitron mb-2">Laravel</h3>
          <p class="text-sm text-gray-400">Backend framework</p>
        </div>
        <div class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-blue-400 transition-all shadow-md hover:shadow-blue-500/20 rounded-lg">
          <h3 class="text-lg font-bold orbitron mb-2">MySQL</h3>
          <p class="text-sm text-gray-400">Relational database</p>
        </div>
        <div class="bg-[#0f0f0f] p-6 border border-white/10 hover:border-blue-400 transition-all shadow-md hover:shadow-blue-500/20 rounded-lg">
          <h3 class="text-lg font-bold orbitron mb-2">Git</h3>
          <p class="text-sm text-gray-400">Version control</p>
        </div>
      </div>
    </div>
  </section>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>