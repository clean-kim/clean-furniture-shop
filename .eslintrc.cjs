module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.cjs",
      ],
      parserOptions: {
        sourceType: "script",
      }
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
    'sort-keys'
  ],
  root: true,
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'after':  true, 'before': false }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': ['error', {
      'alphabetize': { caseInsensitive: true, order: 'asc' },
      'groups': ['builtin', 'external', 'internal', 'index', 'parent', 'sibling', 'type', 'unknown'],
      'newlines-between': 'never',
      'pathGroups': [{ group: 'builtin', pattern: 'react*', position: 'after' }],
      'pathGroupsExcludedImportTypes': ['type']
    }],
    'indent': ['error', 2],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-tabs': 'error',
    'curly': ['error', 'all'],
    'object-curly-newline': ['error', {
      'ExportDeclaration': { multiline: true, minProperties: 3 },
      'ImportDeclaration': 'never',
      'ObjectPattern': { multiline:  false }
    }],
    'object-curly-spacing': ['error', 'always'],
    'arrow-body-style': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    "quote-props": ["error", "as-needed"],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'sort-imports': ["error", { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: false }],
    'sort-keys/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
    'no-empty': 'error',
    'linebreak-style': [2, 'unix'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: './tsconfig.json',
      node: {
        paths: ['.'],
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    },
    react: { version: 'detect' }
  }
}
