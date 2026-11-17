module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    // The shadcn/ui components in this repo are plain JavaScript and do not
    // declare PropTypes. Keep the rule off so lint matches the existing code.
    'react/prop-types': 'off',
    // shadcn files export a hook or cva variants next to the component.
    'react-refresh/only-export-components': 'off',
  },
  overrides: [
    {
      files: ['tailwind.config.js', '*.cjs'],
      env: { node: true },
    },
  ],
}
