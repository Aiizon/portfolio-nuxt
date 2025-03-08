<script setup lang="ts">
import SectionTitle from "~/components/SectionTitle.vue";
</script>

<template>
    <section id="legal">
        <SectionTitle title="Mentions Légales"/>
        <div class="legal-content">
            <div class="legal-section">
                <h2>Informations générales</h2>
                <p>Ce site web est édité par Killian Bonneau, étudiant en BTS SIO à l'Institut d'Informatique Appliquée.</p>
                <p>
                    Contact :
                    <NuxtLink class="contact-info" id="contact-email" href="mailto:killian.bonneau@iia-formation.fr">killian.bonneau@iia-formation.fr</NuxtLink>
                </p>
                <p>Hébergeur : Infomaniak, dont le siège social est situé au 25 Rue Eugène-Marziano, 1227 Genève, Suisse</p>
            </div>

            <div class="legal-section">
                <h2>Propriété intellectuelle</h2>
                <p>L'ensemble du contenu présent sur ce site (textes, images, code, design) est la propriété exclusive de Killian Bonneau, sauf mention contraire.</p>
                <p>Les marques et logos présents sur ce site sont la propriété de leurs détenteurs respectifs.</p>
                <p>Toute reproduction totale ou partielle de ce contenu est interdite sans autorisation préalable.</p>
            </div>

            <div class="legal-section">
                <h2>Protection des données personnelles</h2>
                <p>Ce site collecte des données personnelles via le formulaire de contact. Ces données (nom, prénom, adresse email et message) sont uniquement utilisées pour répondre à vos demandes et ne sont pas conservées au-delà du temps nécessaire à cette fin.</p>
                <p>Aucune donnée n'est partagée avec des tiers.</p>
                <p>Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
                <p>Pour exercer ces droits, vous pouvez me contacter à l'adresse email indiquée ci-dessus.</p>
            </div>

            <div class="legal-section">
                <h2>Cookies</h2>
                <p>Ce site n'utilise pas de cookies de traçage.</p>
                <p>Des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.</p>
            </div>

            <div class="legal-section">
                <h2>Liens externes</h2>
                <p>Ce site peut contenir des liens vers des sites externes dont je ne suis pas responsable du contenu.</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
#legal {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    padding-top: 10vh;
    padding-bottom: 5vh;
    background-color: var(--secondary-color);

    .legal-content {
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 900px;
        gap: 2rem;
        color: var(--font-color);
        font-family: "Inter", sans-serif;

        .legal-section {
            p {
                margin-bottom: 0.5rem;
                line-height: 1.6;
                text-align: justify;
            }

            a {
                color: var(--font-light);
                border-bottom: 1px var(--font-light);
            }

            .contact-info {
                font-weight: 500;
            }
        }
    }

    @media (max-width: 768px) {
        padding-top: 10vh;

        .legal-content {
            width: 90%;

            .legal-section {
                h2 {
                    font-size: var(--text-medium);
                }

                p {
                    font-size: 0.9rem;
                }
            }
        }
    }
}
</style>