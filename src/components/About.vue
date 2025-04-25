<template>
  <DefaultLayout>
    <section class="py-20 px-6 ">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center orbitron">// ABOUT ME</h2>
        <div class="grid md:grid-cols-2 gap-10 items-center">
          
          <!-- Left: Text -->
          <div>
            <h3 class="text-xl font-bold mb-4 orbitron">Who I Am</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              I’m <span class="text-white font-semibold">Michael Angelo</span>, a web developer passionate about building beautiful and performant websites. With experience in both frontend and backend, I craft seamless user experiences powered by clean, efficient code.
            </p>
            <p class="text-gray-400 text-sm leading-relaxed mt-4">
              Whether it's designing interactive UIs with <span class="text-teal-400">Vue.js</span> or architecting backend systems with <span class="text-red-400">Laravel</span>, I love solving problems and bringing ideas to life.
            </p>
          </div>

          <!-- Right: Image -->
          <div class="border border-white/10 rounded-lg overflow-hidden shadow-md hover:shadow-blue-500/20 transition">
            <img src="/src/assets/image.png" alt="Michael Angelo" class="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>
