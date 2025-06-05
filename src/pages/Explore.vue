<template>
  <DefaultLayout>
    <section class="py-20 px-6 bg-black text-white max-w-5xl mx-auto">
      <h1 class="text-4xl font-bold mb-6">Explore Our TikTok Videos</h1>

      <div class="flex justify-center">
        <iframe
          src="https://www.tiktok.com/embed/v2/7419237960903707911"
          width="325"
          height="577"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          class="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>
