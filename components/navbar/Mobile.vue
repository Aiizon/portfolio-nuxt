<script setup lang="ts">
import ThemeSwitch from '~/components/ThemeSwitch.vue';
import { type Ref, ref } from 'vue';

const displayMenu: Ref<boolean> = ref(false);
</script>

<template>
    <div v-show="displayMenu" class="menu-container">
        <div class="close-menu-button" @click="displayMenu = !displayMenu">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#E5E5E5"></path> </g></svg>
        </div>
        <div class="menu-items">
            <a href="/#home"        @click="displayMenu = !displayMenu">Accueil</a>
            <a href="/#about"       @click="displayMenu = !displayMenu">A propos</a>
            <a href="/#skills"      @click="displayMenu = !displayMenu">Compétences</a>
            <a href="/#projetcts"   @click="displayMenu = !displayMenu">Projets</a>
            <a href="/#internships" @click="displayMenu = !displayMenu">Stages</a>
            <a href="/veille"       @click="displayMenu = !displayMenu">Veille technologique</a>
            <a href="/#contact"     @click="displayMenu = !displayMenu">Contact</a>
        </div>
    </div>
    <div v-show="!displayMenu" class="navbar-container">
        <NuxtImg
            class="avatar-small"
            src="/img/avatar.jpg"
            alt="Avatar"
            loading="lazy"
            formats="webp"
            sizes="40px"
        />
        <div class="navbar-items">
            <span class="theme-span">Thème :</span>
            <ThemeSwitch/>
            <button class="menu-button" @click="displayMenu = !displayMenu">
                <svg viewBox="0 0 24 24" fill="#E5E5E5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.menu-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: var(--darker-bg);

    @supports (backdrop-filter: none) or (-webkit-backdrop-filter: none) {
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }

    .close-menu-button {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background-color: var(--accent-dark);
        border: none;
        border-radius: 999px;
        cursor: pointer;

        svg {
            padding: 3px;
        }
    }

    .menu-items {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-evenly;
        margin: 2rem 0;
        padding: 1rem;
        font-size: 1.5rem;
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
}

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

        .theme-span {
            font-family: "Inter", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
            color: var(--font-color);
        }

        .menu-button {
            position: relative;
            margin-right: 4px;
            width: 40px;
            height: 40px;
            background-color: var(--accent-dark);
            border: none;
            border-radius: 999px;
            cursor: pointer;

            svg {
                padding: 3px;
            }
        }
    }
}

</style>
