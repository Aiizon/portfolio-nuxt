<script setup lang="ts">
</script>

<template>
    <main id="not-found">
        <div class="not-found-logo">
            <NuxtImg
                src="/img/404.png"
                alt="Illustration représentant l'erreur 404"
                loading="lazy"
                formats="webp"
                sizes="sm:50vw 100vw"
            />
            <p>Crédits: SAWARATSUKI@<NuxtLink href="https://github.com/SAWARATSUKI/KawaiiLogos" ref="_blank" rel="noopener noreferrer">GitHub</NuxtLink></p>
        </div>
        <div class="not-found-content">
            <h1>404</h1>
            <p>Oups ! La page que vous cherchez n'existe pas.</p>
            <NuxtLink to="/">Retourner à l'accueil</NuxtLink>
        </div>
    </main>
</template>

<style scoped lang="scss">
#not-found {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 89vh;
    width: 100%;
    background-color: var(--secondary-color);

    .not-found-logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;

        img {
            max-width: 100%;
        }

        p {
            color: var(--font-color);
            font-size: var(--text-small);
            text-align: center;
            font-family: "Inter", sans-serif;
            font-weight: 400;
            line-height: 1.5;

            a {
                color: var(--font-color);
                text-decoration: underline;
            }
        }
    }

    .not-found-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 30%;

        * {
            color: var(--font-color);
            font-family: "Inter", sans-serif;
            font-weight: 400;
            line-height: 1.5;
        }

        h1 {
            font-size: var(--text-xxx-large);
        }

        p {
            font-size: var(--text-medium);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 2rem;

        .not-found-logo {
            width: 100%;
        }

        .not-found-content {
            width: 90%;
        }
    }
}
</style>
