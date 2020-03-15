module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'esnext',
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'class-methods-use-this': 'off',
        'curly': ['error', 'multi'],
        'import/extensions': ['error', 'ignorePackages', {
            'js': 'always',
        }],
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',
        'indent': ['error', 4],
        'new-cap': ['error', { 'newIsCap': false }],
        'new-parens': ['error', 'never'],
        'nonblock-statement-body-position': ['error', 'below'],
        'no-console': 'off',
        'no-plusplus': 'off',
        'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
        'no-var': 'error',
    },
};
