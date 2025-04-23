<script setup lang="ts">

</script>

<template>
    <footer>
        <p>Fait avec ❤️ avec <NuxtLink to="https://vuejs.org/">Vue.js</NuxtLink> & <NuxtLink to="https://nuxt.com/">Nuxt</NuxtLink></p>
        <p>&copy; 2024-2025 - Killian Bonneau - <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink></p>
    </footer>
</template>

<style scoped lang="scss">
footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    background-color: var(--accent-dark);
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 0.8rem;
    margin-top: auto;
}

a {
    color: var(--font-light);
    border-bottom: 1px var(--font-light);
}
</style>
