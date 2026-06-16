<script setup>
import { ref } from 'vue'

</script>

<template>
    <header class="header">
    <div class="container nav">
        <h1 class="logo">ERICK VARGAS</h1>
        <nav class="nav">
            <router-link to="/">Inicio</router-link>
            <p></p>
            <router-link to="/about">About</router-link>
        </nav>
    </div>
</header>
</template>

<style scoped>
/* HEADER */
.header {
    background: #020617;
    padding: 15px;
    border-bottom: 1px solid #1e293b;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: 'arial', serif;
    color: #cbd5f5;
    letter-spacing: 2px;

}

nav a {
    text-decoration: none;
    color: #e2e8f0;
    transition: 0.3s;
}

nav a:hover {
    color: #818cf8;
}
</style>