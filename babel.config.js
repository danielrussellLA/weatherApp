module.exports = {
    sourceType: 'unambiguous',
    env: {
        development: {
            compact: false,
        },
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current',
                        },
                    },
                ],
            ],
        },
    },
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    browsers: ['>1%', 'ie >= 11'],
                },
            },
        ],
        '@babel/preset-react',
        '@emotion/babel-preset-css-prop',
    ],
    plugins: [['@babel/plugin-transform-runtime']],
}
