// https: //prettier.io/docs/en/options.html
module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    arrowParens: 'always',
    overrides: [
        {
            files: ['*.html'],
            options: {
                tabWidth: 4,
            },
        },
    ],
}
