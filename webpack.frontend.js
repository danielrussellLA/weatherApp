const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()

const PUBLIC_PATH = process.env.PUBLIC_PATH || 'http://localhost:3000'
const LATEST_GIT_COMMIT_HASH = gitRevisionPlugin.commithash()
const SHORT_GIT_HASH = LATEST_GIT_COMMIT_HASH.substr(0, 7)

module.exports = {
    context: __dirname,

    entry: ['./src/index.js'],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: `${SHORT_GIT_HASH}/[name].[chunkhash].bundle.js`,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader',
            },
        ],
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules.*/,
                    name: 'nodeModules',
                    chunks: 'all',
                },
            },
        },
        runtimeChunk: {
            name: 'manifest',
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            publicPath: PUBLIC_PATH,
            inject: 'body',
        }),
    ],

    watchOptions: {
        ignored: /node_modules/,
    },
}
