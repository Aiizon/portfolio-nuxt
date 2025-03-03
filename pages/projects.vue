<script setup lang="ts">
import { ref, Ref } from "vue";
import SectionTitle from "~/components/SectionTitle.vue";

const projectList: Ref<Array<null>> = ref([]);
</script>

<template>
<main id="projects">
    <SectionTitle title="Mes projets"/>
    <div class="projects-items">
<!--        <div v-for="project in projectList" :key="project.id" class="projects-item">-->
<!--            <img :src="project.smallImage" :alt="project.title"/>-->
<!--            <div class="projects-item-content">-->
<!--                <h2>{{ project.title }}</h2>-->
<!--                <p>{{ project.shortDescription }}</p>-->
<!--                <NuxtLink :to="'project/' + project.slug">En savoir plus</NuxtLink>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</main>
</template>

<style scoped lang="scss">
#projects {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 95vh;
    background-color: var(--secondary-color);

    .projects-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 2rem;
        margin: 2rem 0;
        width: 100%;

        .projects-item {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 20%;
            background-color: var(--primary-color);
            border-radius: 20px;

            img {
                width: 100%;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
            }

            .projects-item-content {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: start;
                gap: 1rem;
                padding: 0.5rem;
                width: 100%;
                margin-bottom: 1rem;
                font-family: "Inter", sans-serif;

                * {
                    margin: 0 0 0 1rem;
                    color: var(--font-color);
                }

                h2 {
                    font-size: var(--text-large);
                }

                p {
                    font-size: var(--text-medium);
                }

                a {
                    margin-top: 1rem;
                    font-size: var(--text-medium);
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        min-height: 90vh;
        padding-top: 10vh;

        .projects-items {
            .projects-item {
                width: 75%;
            }
        }
    }
}
</style>
