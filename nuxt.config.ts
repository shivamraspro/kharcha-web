// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'kharcha | Manage your expenses',
    },
  },
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: '',
    },
  },
  devServer: {
    port: parseInt(process.env.PORT!),
  },
  compatibilityDate: '2025-07-15',
})
