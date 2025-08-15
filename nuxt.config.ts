// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: true },
  devServer: {
    port: 5050,
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: {
        // This is a factory config and can only be used to set some general styles
        // View the source code to see how this factory config translates to eslint rules
        // https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts
        // Full reference: https://eslint.style/rules/quote-props
        arrowParens: true,
        blockSpacing: true,
        braceStyle: '1tbs',
        commaDangle: 'always-multiline',
        indent: 2,
        jsx: true,
        pluginName: '@stylistic',
        quoteProps: 'consistent-as-needed',
        quotes: 'single',
        semi: true,
        severity: 'warn',
      },
    },
  },
});
