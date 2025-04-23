<script setup lang="ts">
useSeoMeta({
    title: 'Portfolio de Killian Bonneau',
    description: 'Portfolio de Killian Bonneau, étudiant en développement web et PC',
});
</script>

<template>
    <PartialHome/>
    <PartialAbout/>
    <PartialSkills/>
    <PartialProjects/>
    <PartialInternships/>
    <div class="nav-tech-watch fade-up">
        <NuxtLink to="/veille" class="nav-tech-watch-link">Veille technologique</NuxtLink>
    </div>
    <PartialContact/>
</template>

<style scoped lang="scss">
.nav-tech-watch {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .nav-tech-watch-link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
        width: 10.75rem;
        background-color: var(--accent-dark);
        border-radius: 16px;
        text-align: center;
        font-family: "Inter", sans-serif;
        font-size: 1.25rem;
        color: var(--font-light);
        text-decoration: none;
        font-weight: 500;
        margin: 0 1rem;
        transition: filter 0.3s linear;

        &:hover {
            filter: brightness(1.3);
        }
    }
}
</style>
