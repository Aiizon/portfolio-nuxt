<script setup lang="ts">
import { type Ref } from 'vue'
import { NavbarMobile, NavbarDesktop } from "#components";
import { useMediaQuery } from "@vueuse/core";

import '~/assets/styles/global.scss';

declare module 'vue' {
    interface ImportMeta {
        readonly env: {
            readonly VITE_EMAILJS_PUBKEY:     string;
            readonly VITE_EMAILJS_SERVICEID:  string;
            readonly VITE_EMAILJS_TEMPLATEID: string;
            readonly VITE_MOBILE_BREAKPOINT:  string;
        }
    }
}

const mobileBreakpoint: number = Number(import.meta.env.VITE_MOBILE_BREAKPOINT);
const isMobile: Ref<boolean>   = useMediaQuery(`(max-width: ${mobileBreakpoint}px)`);
</script>

<template>
    <component :is="isMobile ? NavbarMobile : NavbarDesktop" />
    <NuxtPage/>
    <Footer/>
</template>

<style scoped lang="scss">
</style>