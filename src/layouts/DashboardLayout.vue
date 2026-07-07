<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar />
  <div class="min-h-screen bg-slate-100 flex flex-col antialiased font-sans">

    <main class="max-w-7xl w-full mx-auto px-6 flex-1 mb-12 z-10">
      <slot />
    </main>

    <footer class="bg-white border-t border-slate-200 py-6 text-slate-500">
      <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">

        <!-- Copyright -->
        <div class="flex items-center flex-wrap justify-center gap-x-2 gap-y-1 text-xs text-slate-400 order-2 sm:order-1">
          <p>&copy; 2026 Erick Vargas Corona. Todos los derechos reservados.</p>
        </div>

        <!-- Stack Tecnológico / Atribución -->
        <div class="flex items-center flex-wrap justify-center gap-x-2 gap-y-1 text-xs text-slate-400 order-1 sm:order-2">
          <span>Desarrollado con</span>
          <span class="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/60">Vue.js</span>
          <span>&bull;</span>
          <span>TypeScript</span>
          <span>&bull;</span>
          <span>Tailwind CSS</span>
          <span class="hidden sm:inline ml-1">&mdash;</span>
          <span class="flex items-center gap-1 ml-1 text-slate-500">
            Desplegado en
            <span class="font-medium text-black tracking-tight flex items-center gap-1">
              <svg class="h-3 w-3 inline-block fill-current" viewBox="0 0 76 65">
                <path d="M37.527 0L75.054 65H0L37.527 0Z" />
              </svg>
              Vercel
            </span>
          </span>
        </div>

      </div>
    </footer>

  </div>
</template>