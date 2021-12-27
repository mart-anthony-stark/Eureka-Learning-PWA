export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eureka',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/_global.scss', '~assets/css/astronomy.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/fontawesome'],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: 'static',

  ssr: false,

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Eureka',
      author: 'group-1',
    },
    manifest: {
      name: 'Eureka',
      description: 'Educational Progressive Web App',
      lang: 'en',
    },

    icon: {
      filename: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
  },

  router: {
    middleware: 'auth',
  },

  env: {
    apiBaseUrl:
      process.env.BASE_URL || 'http://localhost:4000',
  },
}
