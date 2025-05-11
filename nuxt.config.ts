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
  sitemap: {
    enabled: true,
    autoLastmod: true,
    minify: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    },
    urls: [
      {
        loc: '/',
        changefreq: 'monthly',
        priority: 1.0,
        lastmod: new Date(),
      },
      {
          loc: '/mentions-legales',
          changefreq: 'monthly',
          priority: 0.6,
          lastmod: new Date(),
      },
      {
        loc: '/stage/altays',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date(),
      },
      {

        loc: '/stage/ascadis',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date(),
      },
      {
        loc: '/projet/portfolio',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date(),
      },
      {
        loc: '/projet/slv',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date(),
      },
      {
        loc: '/projet/worktogether-desktop',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date(),
      },
      {
        loc: '/projet/worktogether-web',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date(),
      }
    ],
    exclude: [
        '/404',
    ],
    autoI18n: true,
  },
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
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    }
  },
  components: {
    global: true,
    dirs: [
      '~/components',
      '~/components/content',
    ]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
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
          tagPosition: 'bodyOpen',
        }
      ]
    }
  }
});