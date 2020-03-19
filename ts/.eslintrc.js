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
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/member-delimiter-style': ['error', {
            'multiline': {
                'delimiter': 'semi',
                'requireLast': true,
            },
            'singleline': {
                'delimiter': 'semi',
                'requireLast': true,
            },
        }],
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': ['error', 'always'],
        'new-parens': ['error', 'never'],
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': ['error', {
            'max': 1,
            'maxEOF': 0,
            'maxBOF': 0,
        }],
        'no-unused-vars': 'off',
        'no-var': 'error',
        'quotes': ['error', 'single'],
        'semi': 'off',
    }
};
