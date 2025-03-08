export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxt/image',
  ],
  content: {
    database: {
      type: 'sqlite',
      filename: 'SQLITE_DB_LOCATION',
    },
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
        remarkPlugins: {},
        rehypePlugins: {},
        highlight: {
          theme: 'github-dark'
        }
      }
    }
  },
  image: {
    quality: 80,
    formats: ['webp', 'png', 'jpeg'],
  },
  app: {
    head: {
      script: [
        {
          innerHTML: `
            (function() {
              const theme = localStorage.getItem('theme') || 
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.setAttribute('data-theme', theme);
            })();
          `,
          type: 'text/javascript',
          tagPosition: 'bodyOpen'
        }
      ]
    }
  }
});