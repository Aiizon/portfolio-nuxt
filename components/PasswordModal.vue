<script setup lang="ts">
const props = defineProps<{
    open:    boolean;
    target:  string;
    onClose: () => void;
}>();

const emit = defineEmits(['download']);

const password: Ref<string> = ref('');
const error:    Ref<string> = ref('');

const validPasswords = import.meta.env.VITE_PUBLIC_DOWNLOAD_PASSWORDS?.split(',') || [];

function checkPassword() {
    if (validPasswords.includes(password.value)) {
        emit('download', props.target);
        password.value = '';
        error.value = '';
        props.onClose();
    } else {
        error.value = 'Mot de passe incorrect';
    }
}
</script>

<template>
    <div v-show="open" class="modal-overlay">
        <div class="modal-content" @click.stop>
            <h3>Accès protégé</h3>
            <p>Veuillez saisir le mot de passe pour télécharger ce document.</p>

            <form @submit.prevent="checkPassword">
                <input type="password" v-model="password" placeholder="Mot de passe" required autofocus>
                <p v-if="error" class="error">{{ error }}</p>

                <div class="button-group">
                    <button type="button" @click="onClose">Annuler</button>
                    <button type="submit">Télécharger</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;

    .modal-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-color);
        padding: 2rem;
        border-radius: 16px;
        width: 90%;
        max-width: 400px;

        h3 {
            font-family: "Playwrite IT Moderna", cursive;
            color: var(--font-color);
            margin-top: 0;
        }

        p {
            text-align: justify;
            font-family: "Inter", sans-serif;
            color: var(--font-color);
        }

        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            width: 100%;

            input {
                align-self: center;
                width: 80%;
                padding: 1rem;
                border: none;
                border-radius: 10px;
                background-color: #fff;
                color: var(--font-dark);
                font-family: "Inter", sans-serif;
                font-weight: 400;
                line-height: 1.5;
            }

            .error {
                color: red;
                font-size: 0.9rem;
            }

            .button-group {
                display: flex;
                justify-content: space-evenly;
                margin-top: 1rem;

                button {
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    transition: filter 0.3s linear;

                    &:first-child {
                        background-color: var(--secondary-color);
                        color: var(--font-color);
                    }

                    &:last-child {
                        background-color: var(--accent-dark);
                        color: var(--font-light);
                    }

                    &:hover {
                        filter: brightness(1.3);
                    }
                }
            }
        }
    }
}
</style>