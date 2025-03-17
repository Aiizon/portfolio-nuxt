<script setup lang="ts">

</script>

<template>
    <section id="home">
        <div class="home-content">
            <NuxtImg
                class="avatar"
                src="/img/avatar.jpg"
                alt="Avatar"
                loading="lazy"
                formats="webp"
                sizes="sm:400px 256px"
            />
            <div class="home-content-items">
                <span>Bonjour ! Je m’appelle</span>
                <span><h1>Killian Bonneau</h1></span>
                <span>Et je suis étudiant en 2ᵉ année de BTS SIO</span>
            </div>
        </div>
        <div class="lower-frame">
            <div class="down-arrow">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"></path></g></svg>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
#home {
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    height: 100vh;

    .home-content {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: space-evenly;
        align-items: center;

        .home-content-items {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 45%;
            color: var(--font-color);
            font-weight: 500;
            line-height: 1.5;

            span {
                margin: 0.5rem;
            }

            span:first-child {
                font-family: "Playwrite IT Moderna", cursive;
                font-weight: 400;
                font-style: normal;
                font-size: var(--text-xx-large);
            }

            h1 {
                margin: 0;
                font-family: "Mali", cursive;
                font-weight: 400;
                font-style: normal;
                font-size: var(--text-xxx-large);
            }

            span:last-child {
                text-align: center;
                max-width: 50%;

                font-family: "Mali", cursive;
                font-weight: 400;
                font-style: normal;
                font-size: var(--text-x-large);
            }
        }

        .avatar {
            display: block;
            max-width: 400px;
            max-height: 400px;
            border-radius: 80px;
        }

        // @todo: rendre ce breakpoint dynamique (variable ?)
        @media (max-width: 768px) {
            flex-direction: column-reverse;

            .home-content-items {
                margin-top: 5rem;
                width: fit-content;

                span:first-child {
                    font-size: var(--text-x-large);
                }

                h1 {
                    font-size: var(--text-xx-large);
                }

                span:last-child {
                    max-width: 75%;
                    font-size: var(--text-large);
                }
            }

            .avatar {
                max-width: 256px;
                max-height: 256px;
            }
        }
    }

    .lower-frame {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
        background-color: var(--secondary-color);

        .down-arrow {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            border: var(--accent-dark) 2px solid;

            svg {
                width: 1.5rem;
                height: 1.5rem;
                fill: var(--font-color);
            }
        }
    }
}
</style>
