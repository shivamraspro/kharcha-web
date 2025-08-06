// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devServer: {
    port: 5050
  },
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui'],
})