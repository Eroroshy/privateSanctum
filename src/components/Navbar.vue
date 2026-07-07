<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contacto', href: '#contacto' },
];
</script>

<template>
  <header class="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 border-b border-gray-100 z-50 transition-all duration-300">
    <nav class="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between">
      
      <!-- Logo -->
      <div class="text-2xl font-mono tracking-wide text-gray-900 cursor-pointer hover:text-indigo-600 transition-colors duration-300">
        <a href="#inicio">&lt;E.Vargas/&gt;</a>
      </div>

      <!-- Menú Escritorio -->
      <ul class="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href" class="hover:text-indigo-600 transition-colors duration-200">
            {{ link.name }}
          </a>
        </li>
      </ul>
      
      <!-- Botón de CV Escritorio -->
      <a href="/CV_Erick_Vargas.pdf" download
        class="hidden md:inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-white font-semibold shadow-sm hover:bg-indigo-700 hover:shadow-md active:scale-[0.98] transition-all duration-200">
        Descargar CV
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0l4-4m-4 4l-4-4M4 21h16" />
        </svg>
      </a>

      <!-- Botón Hamburguesa Móvil -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" 
        class="md:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors rounded-lg focus:outline-none"
        aria-label="Abrir menú">
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

    </nav>

    <!-- Menú Desplegable Móvil -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl">
        <ul class="flex flex-col px-6 py-4 gap-3 text-gray-700 font-medium">
          <li v-for="link in navLinks" :key="link.name">
            <a :href="link.href" @click="isMobileMenuOpen = false" class="block w-full py-2.5 hover:text-indigo-600 transition-colors duration-200">
              {{ link.name }}
            </a>
          </li>
          
          <li class="pt-4 mt-2 border-t border-gray-100 pb-2">
            <a href="/CV_Erick_Vargas.pdf" download 
              class="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow-md hover:bg-indigo-700 active:scale-[0.98] transition-all duration-200">
              Descargar CV
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0l4-4m-4 4l-4-4M4 21h16" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>