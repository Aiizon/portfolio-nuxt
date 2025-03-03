<script setup lang="ts">
import emailJS from '@emailjs/browser';
import { Ref, ref, onMounted } from 'vue';
import SectionTitle from "~/components/SectionTitle.vue";

type TemplateParams = {
    user_firstname: string;
    user_lastname: string;
    user_email: string;
    message: string;
    site_url: string;
};

const contact: Ref<TemplateParams> = ref(
    {
        user_firstname: '',
        user_lastname: '',
        user_email: '',
        message: '',
        site_url: ''
    } as TemplateParams
);

onMounted(() => {
    contact.value.site_url = window.location.origin;
})

emailJS.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBKEY
});

async function sendEmail() {
    const templateParams = {
        ...contact.value
    };

    await emailJS.send(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        templateParams
    );

    contact.value = {
        user_firstname: '',
        user_lastname: '',
        user_email: '',
        message: '',
        site_url: window.location.origin
    };
}
</script>

<template>
    <section id="contact">
        <SectionTitle title="Me contacter"/>
        <form class="contact-form" @submit.prevent="sendEmail">
            <div class="contact-form-item">
                <label for="user_firstname">Prénom</label>
                <input type="text" v-model="contact.user_firstname" placeholder="Prénom" required>
            </div>
            <div class="contact-form-item">
                <label for="user_lastname">Nom</label>
                <input type="text" v-model="contact.user_lastname" placeholder="Nom" required>
            </div>
            <div class="contact-form-item">
                <label for="user_email">E-mail</label>
                <input type="email" v-model="contact.user_email" placeholder="E-mail" required>
            </div>
            <div class="contact-form-item">
                <label for="message">Message</label>
                <textarea v-model="contact.message" placeholder="Message" required></textarea>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </section>
</template>

<style scoped lang="scss">
#contact {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 100vh;
    gap: 5vh;
    background-color: var(--secondary-color);

    .contact-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 40%;
        height: 40%;
        gap: 2rem;
        padding: 2rem;
        border-radius: 20px;
        background-color: var(--primary-color);
        color: var(--font-color);
        font-family: "Inter", sans-serif;
        font-weight: 400;
        line-height: 1.5;

        .contact-form-item {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            gap: 0.5rem;
            width: 100%;

            label {
                font-size: var(--text-medium);
                font-weight: 600;
            }

            input, textarea {
                width: 100%;
                padding: 0.5rem;
                border: none;
                border-radius: 10px;
                background-color: #fff;
                color: var(--accent-font);
                font-family: "Inter", sans-serif;
                font-weight: 400;
                line-height: 1.5;
            }

            textarea {
                resize: none;
                height: 10rem;
            }
        }

        button {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 10px;
            background-color: var(--accent-dark);
            color: var(--font-light);
            font-family: "Inter", sans-serif;
            font-weight: 600;
            line-height: 1.5;
            cursor: pointer;
            transition: filter 0.3s linear;
        }

        button:hover {
            filter: brightness(1.3);
        }
    }

    @media (max-width: 768px) {
        min-height: 90vh;
        padding-top: 10vh;

        .contact-form {
            min-width: 65%;
            margin-bottom: 2rem;
        }
    }
}
</style>
