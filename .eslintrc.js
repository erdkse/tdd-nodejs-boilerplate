module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier', 'jest'],
    parserOptions: {
        ecmaVersion: 12
    },
    rules: {}
};
