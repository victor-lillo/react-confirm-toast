import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintConfigPrettier from 'eslint-config-prettier'

// TODO migrate to flat config when typescript-slint supports it https://github.com/typescript-eslint/typescript-eslint/issues/8211
// TODO Wait till this is published: https://github.com/storybookjs/eslint-plugin-storybook/pull/152
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    ignores: ['dist/*', 'postcss.config.cjs'],
  }
)
