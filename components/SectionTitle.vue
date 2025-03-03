<script setup lang="ts">
const props = defineProps({
    title: String
});
</script>

<template>
<div class="section-title">
    <h2>{{ title }}</h2>
</div>
</template>

<style scoped lang="scss">
.section-title {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: fit-content;
    padding: 18px;
    border-radius: 20px;
    background-color: var(--primary-color);
    color: var(--font-color);

    h2 {
        font-family: "Playwrite IT Moderna", cursive;
        font-weight: 500;
        font-size: var(--text-x-large);
        margin: 0;
    }

    @media (max-width: 768px) {
        padding: 12px;

        h2 {
            font-size: var(--text-large);
        }
    }
}
</style>
