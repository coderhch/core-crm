module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier' // 必须放最后
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'warn'
    }
}
