module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:@react-three/recommended",
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
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: './tsconfig.json',
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "import",
    "sort-keys",
    "@react-three",
  ],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { after: true, before: false }],
    "import/extensions": ["error", 'ignorePackages', {
      js: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": 2,
    "import/order": [2, {
      alphabetize: { caseInsensitive: true, order: 'asc' },
      groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling', 'type', 'unknown'],
      'newlines-between': 'never',
      pathGroups: [{ group: 'builtin', pattern: 'react*', position: 'after' }],
      pathGroupsExcludedImportTypes: ['type'],
    }],
    "indent": [2, 2],
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
    "no-tabs": "error",
    "object-curly-newline": ["error", {
      ExportDeclaration: { minProperties: 3, multiline: true },
      ImportDeclaration: "never",
      ObjectPattern: { multiline: false },
    }],
    curly: [2, 'all'],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "sort-imports": ["error", { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: false }],
    "sort-keys/sort-keys-fix": ["error", "asc", { caseSensitive: false, natural: true }],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "linebreak-style": [2, "unix"],
    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": "off"
  },
  settings: {
    'import/resolver': {
      typescript: './tsconfig.json',
      node: {
        paths: ['.'],
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
      },
    },
    react: { version: "detect" },
  }
}