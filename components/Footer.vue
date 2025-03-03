<script setup lang="ts">

</script>

<template>
    <footer>
        <p>Fait avec ❤️ avec <NuxtLink to="https://vuejs.org/">Vue.js</NuxtLink> & <NuxtLink to="https://nuxt.com">Nuxt</NuxtLink></p>
        <p>&copy; 2024 - Killian Bonneau - <NuxtLink to="/public">Mentions légales</NuxtLink></p>
    </footer>
</template>

<style scoped lang="scss">
footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: var(--accent-dark);
    color: white;
    font-size: 0.8rem;
}

a {
    color: var(--font-light);
    border-bottom: 1px var(--font-light);
}
</style>
