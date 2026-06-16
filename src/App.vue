<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Navbar />

  <main>
   <router-view />
  </main>

  <Footer />

</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
