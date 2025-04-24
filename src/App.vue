<!-- App.vue -->
<template>
    <router-view />
</template>
  
  <script setup>
  import { onMounted } from 'vue';
//   import SpiralBg from './components/SpiralBg.vue';
  import Navigation from './components/Navigation.vue';
  import Hero from './components/Hero.vue';
  import TechStack from './components/TechStack.vue';
  import Footer from './components/Footer.vue';

// Typewriter effect and GSAP animation logic
onMounted(() => {
  // Typewriter effect
  type();

  // GSAP Scroll Animation
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".spiral-bg", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    rotate: 180,
    ease: "none",
    transformOrigin: "center center",
  });
});

</script>

<style scoped>
  .content {
    min-height: 200vh; /* Ensure there's enough height to scroll */
  }
</style>