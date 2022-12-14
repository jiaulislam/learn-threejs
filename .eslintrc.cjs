/* eslint-disable */

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 2, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': [
            'warn',
            { allow: ['clear', 'info', 'error', 'dir', 'trace'] },
        ],
        curly: 'error',
        'no-else-return': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        strict: 'error',
        'symbol-description': 'error',
        yoda: ['error', 'never', { exceptRange: true }],
    },
};
