<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();

const isOpen: Ref<boolean> = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="content-accordion">
        <div class="accordion-header" @click="toggle">
            <span>{{ title }}</span>
            <span class="accordion-icon">{{ isOpen ? '▼' : '►' }}</span>
        </div>
        <div class="accordion-content" :class="{ open: isOpen }">
            <div class="content-inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content-accordion {
    width: 100%;
    margin: 1rem 0;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--accent-dark);

    .accordion-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8rem 1rem;
        cursor: pointer;
        font-weight: 500;
        background-color: var(--accent-dark);
        color: var(--accent-light);
        transition: filter 0.3s linear; 

        &:hover {
            filter: brightness(1.3);
        }
    }

    .accordion-content {
        max-height: 0;
        overflow: hidden;
        background-color: var(--primary-color);
        transition: max-height 0.5s ease-in-out;
        
        &.open {
            max-height: 20000px;
            transition: max-height 0.5s ease-in-out;
        }
        
        .content-inner {
            padding: 1rem;
            font-family: "Inter", sans-serif;
            font-size: var(--text-medium);
            color: var(--font-dark);
            line-height: 1.5;
        }
    }

    .accordion-icon {
        font-size: 0.8rem;
        transition: transform 0.3s linear;
    }
}
</style>