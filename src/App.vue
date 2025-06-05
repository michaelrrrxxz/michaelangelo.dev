<!-- App.vue -->
<template>
    <router-view />
</template>
  
  <script setup>
  import { onMounted } from 'vue';
  import Navigation from './core/Navigation.vue';
  import Footer from './core/Footer.vue';


//   import SpiralBg from './components/SpiralBg.vue';

// Typewriter effect and GSAP animation logic
onMounted(() => {
  // Typewriter effect


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