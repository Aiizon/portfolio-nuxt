<script setup lang="ts">
import SectionTitle from "~/components/SectionTitle.vue";

useScrollAnimation();
</script>

<template>
    <section id="competences">
        <div class="fade-up">
            <SectionTitle title="Mes compétences"/>
        </div>
        <div class="skills-items">
            <div class="skills-item fade-up">
                <NuxtImg
                    src="/img/skills/symfony.png"
                    alt="Logo Symfony"
                    loading="lazy"
                    formats="webp"
                    sizes="70px 56px"
                />
                <div class="skills-item-content">
                    <p>Développement web côté serveur</p>
                    <p>Avec PHP & Symfony</p>
                </div>
            </div>
            <div class="skills-item fade-up">
                <NuxtImg
                    src="/img/skills/vuejs.png"
                    alt="Logo Vue.js"
                    loading="lazy"
                    formats="webp"
                    sizes="70px 56px"
                />
                <div class="skills-item-content">
                    <p>Développement web côté client</p>
                    <p>Avec TypeScript, Vue.js & SASS</p>
                </div>
            </div>
            <div class="skills-item fade-up">
                <NuxtImg
                    src="/img/skills/csharp.png"
                    alt="Logo CSharp"
                    loading="lazy"
                    formats="webp"
                    sizes="70px 56px"
                />
                <div class="skills-item-content">
                    <p>Développement de logiciels PC</p>
                    <p>Avec Microsoft C#</p>
                </div>
            </div>
            <div class="skills-item fade-up">
                <NuxtImg
                    src="/img/skills/mariadb.png"
                    alt="Logo MariaDB"
                    loading="lazy"
                    formats="webp"
                    sizes="70px 56px"
                />
                <div class="skills-item-content">
                    <p>Conception de bases de données</p>
                    <p>Avec MariaDB & Microsoft SQL Server</p>
                </div>
            </div>
            <div class="skills-item fade-up">
                <NuxtImg
                    src="/img/skills/tux.png"
                    alt="Tux, mascotte du système GNU/Linux"
                    loading="lazy"
                    formats="webp"
                    sizes="70px 56px"
                />
                <div class="skills-item-content">
                    <p>Administration de systèmes</p>
                    <p>Avec GNU/Linux & Microsoft Windows</p>
                </div>
            </div>
            <div class="skills-item fade-up">
                <NuxtImg
                    src="/img/skills/docker.png"
                    alt="Logo Docker"
                    loading="lazy"
                    formats="webp"
                    sizes="70px 56px"
                />
                <div class="skills-item-content">
                    <p>Culture DevOps</p>
                    <p>Avec Docker & les pipelines CI/CD</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
#competences {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 100vh;
    background-color: var(--secondary-color);

    .skills-items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-evenly;
        align-items: center;
        gap: 10rem;
        padding: 2rem;

        .skills-item {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            height: 80px;
            gap: 2rem;
            padding: 1rem;
            border-radius: 20px;
            background-color: var(--primary-color);
            color: var(--font-color);
            font-family: "Inter", sans-serif;
            font-weight: 400;
            line-height: 1.5;

            img {
                display: block;
                max-width: 70px;
            }

            .skills-item-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-right: 2rem;

                p {
                    margin: 4px;
                }

                p:first-child {
                    font-size: var(--text-medium);
                    font-weight: 600;
                }

                p:last-child {
                    font-size: var(--text-small);
                }
            }
        }
    }
    @media (max-width: 768px) {
        padding-top: 10vh;

        .skills-items {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            padding: 2rem 0;

            .skills-item {
                padding: 0.5rem;
                width: 90%;

                img {
                    max-width: 56px;
                }
            }
        }
    }
}
</style>
