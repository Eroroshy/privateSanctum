<script setup>
import Navbar from '@/components/Navbar.vue';

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="/about" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    <router-link to="/about">About</router-link>
  </p>
</template>

<style scoped></style>