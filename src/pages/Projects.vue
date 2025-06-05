<template>
  <DefaultLayout>
    <section class="py-20 px-6 bg-black text-white">
      <div class="max-w-3xl mx-auto">
        <!-- Header stays at normal top position -->
        <h2 class="text-4xl font-bold mb-12 text-center orbitron tracking-widest">// PROJECTS</h2>

        <!-- Centered single card -->
        <div class="flex justify-center">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-[#111] p-8 border border-white/10 hover:border-white/30 transition-all duration-300 shadow hover:shadow-white/10 rounded-2xl text-center hover:bg-[#1a1a1a] w-full max-w-md"
          >
            <h3 class="text-2xl font-semibold orbitron text-white mb-3">
              {{ project.name }}
            </h3>
            <p class="text-base text-gray-400 leading-relaxed">
              {{ project.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'

const projects = [
  {
    name: 'NCSAT',
    desc: 'School Ability Testing',
  },
]
</script>
