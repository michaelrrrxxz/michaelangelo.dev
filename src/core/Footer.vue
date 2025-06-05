<template>
  <footer class="py-8 px-6 border-t border-gray-800">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <p class="orbitron opacity-70">
        This Page is Under Construction &copy; {{ currentYear }}
      </p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="https://github.com/michaelrrrxxz" class="hover:opacity-70 transition orbitron">GITHUB</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
