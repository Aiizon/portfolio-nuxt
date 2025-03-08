<script setup lang="ts">
import { useAsyncData } from '#app';

const { data: techWatchItems } = await useAsyncData('techWatch', async () => {
    return await queryCollection('techWatch').all();
});
</script>

<template>
    <main id="tech-watch">
        <SectionTitle title="Veille Technologique" />
        <div class="tech-watch-intro">
            <p>
                Bienvenue dans ma section de veille technologique. Ici, je partage les articles, blogs et ressources qui me permettent de rester à jour avec les dernières avancées dans le domaine du numérique .
                Qu'il s'agisse de développement web, de Linux ou de cybersécurité, je suis toujours à l'affût des nouveaux outils et des meilleures pratiques.
                Cette veille constante est essentielle pour maintenir mes compétences et découvrir de nouvelles technologies émergentes.
                Mes sources sont majoritairement en anglais, mais je m'efforce de trouver des contenus de qualité et pertinents pour ma veille.
            </p>
        </div>
        <SectionTitle title="Mes sources" />
        <div class="tech-watch-items">
            <div v-for="item in techWatchItems" :key="item.id" class="tech-watch-item">
                <img :src="String(item.meta.banner)" :alt="item.seo.title" :data-fill="item.meta.bannerFill" loading="lazy" />
                <div class="tech-watch-item-content">
                    <h2>{{ item.seo.title }}</h2>
                    <p>{{ item.seo.description }}</p>
                </div>
                <div class="tech-watch-link">
                    <NuxtLink :to="String(item.meta.sourceLink)">
                        <span v-if="item.meta.type === 'blog'">Visiter le blog</span>
                        <span v-else-if="item.meta.type === 'website'">Visiter le site web</span>
                        <span v-else-if="item.meta.type === 'youtube'">Visiter sur YouTube</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
#tech-watch {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 90vh;
    padding-top: 10vh;
    background-color: var(--secondary-color);

    .tech-watch-intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 50%;
        width: 80%;
        margin: 1rem 0 2rem;
        text-align: center;

        p {
            font-family: "Inter", sans-serif;
            font-size: var(--text-medium);
            font-weight: 400;
            line-height: 1.5;
            color: var(--font-color);
            text-align: justify;
        }
    }

    .tech-watch-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 100px;
        margin: 2rem 0;
        width: 100%;

        .tech-watch-item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 300px;
            height: 400px;
            background-color: var(--primary-color);
            border-radius: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s linear, color 0.3s linear;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            }

            img {
                display: block;
                position: relative;
                top: 0;
                left: 0;
                width: 100%;
                margin: 0;
                aspect-ratio: 2/1;
                object-position: center;
                box-sizing: border-box;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;

                &[data-fill="cover"] {
                    object-fit: cover;
                }

                &[data-fill="contain"] {
                    object-fit: contain;
                }
            }

            a {
                overflow: hidden;
                transform-origin: center;
                font-size: var(--text-medium);
                text-decoration: underline;
                cursor: pointer;

                &:hover {
                    animation: pulse 1s infinite;
                }

                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            }

            .tech-watch-item-content {
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
                    margin: 0 1rem 0 1rem;
                    color: var(--font-color);
                }

                h2 {
                    font-size: var(--text-large);
                }

                p {
                    font-size: var(--text-medium);
                    text-align: justify;
                }
            }

            .tech-watch-link {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                font-weight: 500;
                margin-bottom: 0.5rem;
                
                a {
                    padding: 1rem;
                    background-color: var(--accent-dark);
                    border-radius: 20px;
                    color: var(--font-light);
                    text-decoration: none;
                    font-size: var(--text-medium);
                    font-family: "Inter", sans-serif;
                }
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding-top: 15vh;

        .tech-watch-intro {
            max-width: 90%;
            p {
                font-size: var(--text-medium);
            }
        }

        .tech-watch-items {
            .tech-watch-item {
                width: 75%;

                .tech-watch-link {
                    gap: 1rem;

                    a {
                        font-size: var(--text-small);
                    }
                }
            }
        }
    }
}
</style>