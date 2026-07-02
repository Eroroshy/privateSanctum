<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';

</script>

<template>

  <Navbar/>
  <div class="min-h-screen bg-slate-100 flex flex-col antialiased font-sans">

    <main class="max-w-7xl w-full mx-auto px-6 flex-1  mb-12 z-10">
      <slot />
    </main>

    <footer class="bg-white border-t border-slate-200 py-4 text-center text-sm text-slate-500">
      <p>&copy; 2026 Erick Vargas Corona. Todos los derechos reservados.</p>
    </footer>

  </div>
</template>