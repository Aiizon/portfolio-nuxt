<script setup lang="ts">
import { ref, Ref } from "vue";

const props = defineProps({
  slug: String
});

const projectList: Ref<Array<null>> = ref([]);
const project: null = null;

if (!project) {
    window.location.href = '/404';
}
</script>

<template>
<main id="project">
    <div class="project-banner">
        <img :src="project.bannerImage" :alt="project.title"/>
        <SectionTitle :title="project.title"/>
    </div>
    <div class="project-content">
        <p>{{ project.description }}</p>
        <p>{{ project.text }}</p>
        <div class="project-links">
            <a v-if="project.repositoryLink" :href="project.repositoryLink" target="_blank" rel="noopener noreferrer">Voir le projet</a>
            <a v-if="project.demoLink" :href="project.demoLink" target="_blank" rel="noopener noreferrer">Voir la démo</a>
        </div>
    </div>
    <NuxtLink class="return" to="/projects">Retour aux projets</NuxtLink>
</main>
</template>

<style scoped lang="scss">
#project {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    background-color: var(--secondary-color);

    .project-banner {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;

        img {
            width: 100%;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
        }

        .section-title {
            position: absolute;
            background-color: var(--primary-color);
            border-radius: 20px;
            z-index: 1;
        }
    }

    .project-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 80%;
        padding: 2rem;
        margin-top: 2rem;
        margin-bottom: 4vh;
        background-color: var(--primary-color);
        border-radius: 40px;
        font-family: "Inter", sans-serif;
        font-weight: 400;

        p {
            margin: 1rem 0;
        }

        .project-links {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            width: 100%;
            font-weight: 500;

            a {
                padding: 1rem;
                background-color: var(--accent-dark);
                border-radius: 20px;
                color: var(--font-light);
                text-decoration: none;
                font-size: var(--text-medium);
                transition: filter 0.3s;
            }

            a:hover {
                filter: brightness(1.2);
            }
        }
    }

    .return {
        margin-bottom: 1rem;
        padding: 1rem;
        background-color: var(--accent-dark);
        border-radius: 20px;
        color: var(--font-light);
        text-decoration: none;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: var(--text-medium);
        transition: filter 0.3s;
    }

    .return:hover {
        filter: brightness(1.2);
    }

    @media (max-width: 768px) {
        .project-banner {
            img {
                min-width: fit-content;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }

            .section-title {
                position: static;
                margin-top: -2rem;
            }
        }

        .project-content {
            width: 90%;
            padding: 1rem;
            margin-top: 1rem;
            margin-bottom: 2vh;

            p {
                margin: 0.5rem 0;
            }

            .project-links {
                gap: 1rem;

                a {
                    font-size: var(--text-medium);
                }
            }
        }

        .return {
            padding: 1rem;
            font-size: var(--text-medium);
        }
    }
}
</style>
