<script setup lang="ts">
import SectionTitle from "~/components/SectionTitle.vue";
// @todo: find a proper picture

useScrollAnimation();
</script>

<template>
    <section id="about">
        <div class="fade-up">
            <SectionTitle title="Qui suis-je ?"/>
        </div>
        <div class="about-content fade-up">
            <img class="about-picture" src="/img/about-picure.png" alt="Image d'illustration de ma page de présentation" loading="lazy"/>
            <div class="about-content-items">
                Je suis Killian Bonneau, développeur passionné par la création d'applications web modernes performantes.
                <br>
                Mon parcours dans le développement a débuté au lycée en 2021, et depuis, j'ai eu l'opportunité de travailler sur divers projets stimulants qui m'ont permis d'affiner mes compétences en PHP, Javascript ou encore en gestion de serveur.
                <br>
                Actuellement en BTS SIO (option SLAM) à l'Institut d'Informatique Appliquée, je cherche constamment à approfondir mes connaissances et à relever de nouveaux défis techniques.
                <br>
                Mon approche du développement est axée sur la création de solutions élégantes et maintenables, en privilégiant les bonnes pratiques et la qualité du code.
                <br>
                Passionné par Linux, j'aime également découvrir de nouveaux outils et technologies pour améliorer mon workflow et mes compétences.
            </div>
        </div>
        <div class="about-download fade-up">
            Télécharger :
            <div class="about-download-links">
                <a href="https://drive.proton.me/urls/3K6ECJ67XW#KbE6lBiGDX0m" target="_blank" ref="noopener noreferrer">Mon CV</a>
                <a href="/" download="">Mon tableau<br>pour l'E5</a>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
#about {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 90vh;
    padding-top: 10vh;
    background-color: var(--secondary-color);

    .about-content {
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        .about-picture {
            display: block;
            max-width: 40%;
            border-radius: 40px;
        }

        .about-content-items {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: justify;
            max-width: 40%;
            color: var(--font-color);
            font-family: "Inter", sans-serif;
            font-weight: 400;
            line-height: 1.5;

            br {
                margin: 1rem 0;
            }
        }
    }

    .about-download {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        color: var(--font-color);
        font-family: "Playwrite IT Moderna", cursive;
        font-size: var(--text-x-large);
        font-weight: 400;
        line-height: 1.5;

        .about-download-links {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            gap: 2rem;

            a {
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
            }

            a:hover {
                filter: brightness(1.3);
            }
        }
    }

    @media (max-width: 768px) {
        gap: 2rem;

        .about-content {
            flex-direction: column;
            gap: 2rem;

            .about-picture {
                max-width: 85%;
                border-radius: 20px;
            }

            .about-content-items {
                max-width: 90%;
                font-size: var(--text-medium);
            }
        }

        .about-download {
            font-size: var(--text-large);
            gap: 1rem;

            .about-download-links {
                gap: 1rem;

                a {
                    height: 3rem;
                    width: 8rem;
                    font-size: var(--text-medium);
                }
            }
        }
    }
}
</style>
