<script setup lang="ts">
import ThemeSwitch from '~/components/ThemeSwitch.vue'

const route = useRoute();
const isProjectRoute = computed(() => route.name === 'project-slug');
</script>

<template>
    <div class="navbar-container" :class="{ 'project-page': isProjectRoute }">
        <NuxtImg
            class="avatar-small"
            src="/img/avatar.jpg"
            alt="Avatar"
            loading="lazy"
            formats="webp"
            sizes="40px"
        />
        <div class="navbar-items">
            <div class="menu-items">
                <NuxtLink to="/#accueil">Accueil</NuxtLink>
                <NuxtLink to="/#a-propos">A propos</NuxtLink>
                <NuxtLink to="/#competences">Compétences</NuxtLink>
                <NuxtLink to="/#projets">Projets</NuxtLink>
                <NuxtLink to="/#stages">Stages</NuxtLink>
                <NuxtLink to="/veille">Veille technologique</NuxtLink>
                <NuxtLink to="/#contact">Contact</NuxtLink>
            </div>
            <span class="theme-span">Thème :</span>
            <ThemeSwitch/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 5rem;
    margin: 0 auto;
    background: var(--darker-bg);

    &.project-page {
        .navbar-items {
            .menu-items a {
                color: var(--font-light);
            }

            .theme-span {
                color: var(--font-light);
            }
        }
    }

    .avatar-small {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        margin-left: 1rem;
    }

    .navbar-items {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        margin-right: 1rem;

        .menu-items {
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            justify-content: space-evenly;
            gap: 0.8rem;
            padding: 1rem;
            color: var(--font-color);
            text-align: center;

            a {
                font-family: "Inter", sans-serif;
                font-optical-sizing: auto;
                font-weight: 500;
                font-style: normal;
                text-decoration: none;
                color: var(--font-color);
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .theme-span {
            font-family: "Inter", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
            color: var(--font-color);
        }
    }
}
</style>
