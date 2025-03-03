<script setup lang="ts">
import SectionTitle from "~/components/SectionTitle.vue";
</script>

<template>
    <section id="about">
        <SectionTitle title="Qui suis-je ?"/>
        <div class="about-content">
            <img class="about-picture" src="/img/about-picure.png" alt="Image d'illustration de ma page de présentation"/>
            <div class="about-content-items">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis  posuere erat. Curabitur convallis, ante tempor volutpat convallis, elit  dolor euismod neque, et fermentum orci ante id nibh. Maecenas tellus  mauris, dapibus nec sagittis ac, sollicitudin in elit. Donec at dictum  metus. Aliquam aliquet massa et tristique pretium. Aenean sit amet nisi  ac sem congue porta eu quis diam. Suspendisse tempus dolor urna, vitae  pharetra velit faucibus sollicitudin.

                Maecenas in dolor pulvinar, commodo sem in, scelerisque sem. In a  imperdiet mauris. Donec scelerisque sapien nunc, vel interdum ipsum  porttitor sed. Fusce et dignissim augue. Donec cursus non sapien sit  amet consectetur.
            </div>
        </div>
        <div class="about-download">
            Télécharger :
            <div class="about-download-links">
                <a href="/public" download="">Mon CV</a>
                <a href="/public" download="">Mon tableau <br> pour l'E5</a>
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
            max-width: 40%;
            color: var(--font-color);
            font-family: "Inter", sans-serif;
            font-weight: 400;
            line-height: 1.5;
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
