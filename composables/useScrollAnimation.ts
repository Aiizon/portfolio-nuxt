// composables/useScrollAnimation.ts
import { onMounted, onBeforeUnmount } from 'vue'

export default function useScrollAnimation(options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    }

    const mergedOptions = { ...defaultOptions, ...options }
    let observer: IntersectionObserver

    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate')
                    observer.unobserve(entry.target)
                }
            })
        }, mergedOptions)

        const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .scale-up')
        animatedElements.forEach(el => observer.observe(el))
    })

    onBeforeUnmount(() => {
        if (observer) {
            observer.disconnect()
        }
    })

    return {}
}