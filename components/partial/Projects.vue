<!--suppress HtmlUnknownTarget -->
<script setup lang="ts">
import SectionTitle from "~/components/SectionTitle.vue";

const { data: projects } = await useAsyncData('projects', () => {
    return queryCollection('projects').all();
});
</script>

<template>
    <main id="projets">
        <div class="fade-up">
            <SectionTitle title="Mes projets"/>
        </div>
        <div class="internships-items fade-up">
            <div v-for="project in projects" :key="project.id" class="internships-item">
                <NuxtImg
                    :src="String(project.meta.smallImage)"
                    :alt="project.seo.title"
                    format="webp"
                    loading="lazy"
                    sizes="sm:75vw 20vw"
                />
                <div class="projects-item-content">
                    <h2>{{ project.seo.title }}</h2>
                    <p>{{ project.meta.shortDescription }}</p>
                    <p>Technologies utilisées : {{ project.meta.tags.join(', ') }}</p>
                    <NuxtLink :to="`projet/${String(project.meta.slug)}`">En savoir plus</NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
#projets {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 89vh;
    background-color: var(--secondary-color);

    .internships-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 2rem;
        margin: 2rem 0;
        width: 100%;

        .internships-item {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 20%;
            background-color: var(--primary-color);
            border-radius: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s linear, color 0.3s linear;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            }

            img {
                width: 100%;
                aspect-ratio: 2/1;
                object-fit: cover;
                object-position: center;
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
                    margin: 0 1rem;
                    color: var(--font-color);
                }

                h2 {
                    height: 4rem;
                    vertical-align: center;
                    font-size: var(--text-large);
                }

                p {
                    font-size: var(--text-medium);
                }

                a {
                    position: relative;
                    overflow: hidden;
                    transform-origin: center;
                    align-self: center;
                    padding: 1rem;
                    background-color: var(--accent-dark);
                    border-radius: 20px;
                    color: var(--font-light);
                    text-decoration: none;
                    font-size: var(--text-medium);
                    font-family: "Inter", sans-serif;

                    &:hover {
                        animation: pulse 1s infinite;
                    }

                    @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                        100% { transform: scale(1); }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        min-height: 90vh;
        padding-top: 10vh;

        .internships-items {
            .internships-item {
                width: 75%;
            }
        }
    }
}
</style>
