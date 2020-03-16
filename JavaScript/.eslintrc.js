module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': ['error', 'always'],
        'no-unused-vars': ['error', {
            'varsIgnorePattern': '^I[A-Z]',
        }],
        'no-var': 'error',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
    }
};
