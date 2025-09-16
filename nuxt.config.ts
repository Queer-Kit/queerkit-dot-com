export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-og-image',
    '@vueuse/nuxt',
    '@nuxthub/core',
    '@nuxt/scripts',
    '@nuxtjs/turnstile',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  hub: {
    blob: true,
    database: true
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'ar', name: 'العربية' },
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
      { code: 'fr', name: 'Français' },
      { code: 'ja', name: '日本語' },
      { code: 'ko', name: '한국어' },
      { code: 'pt', name: 'Português' },
      { code: 'ro', name: 'Română' },
      { code: 'zh_cn', name: '简体中文' },
    ]
  },
  ui: {
    prefix: 'U',
  },
  icon: {
    provider: 'server',
    class: 'icon',
    size: '24px',
    mode: 'css',
    customCollections: [
      {
        prefix: 'first-party',
        dir: './app/assets/icons/first-party',
        normalizeIconName: false,
      },
      {
        prefix: 'third-party',
        dir: './app/assets/icons/third-party',
        normalizeIconName: false,
      },
      {
        prefix: 'flags',
        dir: './app/assets/icons/flags',
        normalizeIconName: false,
      }
    ],
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
        }
      }
    }
  },
  app: {
    head: {
      title: 'Queer Kit',
      titleTemplate: '%s | Queer Kit',
      meta: [
        { name: 'description', content: '' },
        { name: 'author', content: 'Queer Kit' },
        { name: 'creator', content: 'Queer Kit' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  site: {
    url: 'https://queerkit.com',
    name: 'Queer Kit'
  },
  css: ["./app/assets/css/main.css"],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ]
    }
  },
  turnstile: {
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
  },
  runtimeConfig: {
    public: {
      constructionPassword: process.env.SITE_PASSWORD || 'secret'
    },
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ]
})