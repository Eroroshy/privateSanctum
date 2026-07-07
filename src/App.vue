<script setup lang="ts">
import HomeView from './views/HomeView.vue';
import { useHead } from '@vueuse/head'

useHead({
  title: 'Erick Vargas — Portafolio',
  meta: [
    { name: 'description', content: 'Portafolio de Erick Vargas — desarrollador web. Proyectos, servicios y contacto.' },
    { property: 'og:title', content: 'Erick Vargas — Portafolio' },
    { property: 'og:description', content: 'Portafolio de Erick Vargas — desarrollador web.' },
    { property: 'og:url', content: 'https://erickvargas.dev/' }
  ]
})

</script>

<template>
  <main>
   <HomeView />
  </main>
</template>
