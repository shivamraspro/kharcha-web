// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(
  // Your custom configs here
  [
    {
      files: ['app/**/*.vue'],
      rules: {
        'vue/max-attributes-per-line': [
          'warn',
          {
            singleline: 3,
            multiline: 1,
          },
        ],

        'no-console': [
          'warn',
          {
            allow: ['warn', 'error'],
          },
        ],
      },
    },
    eslintConfigPrettier,
  ],
)
