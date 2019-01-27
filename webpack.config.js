// Imports
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'



// Webpack Configuration
const config = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    watch: true,
    devtool: 'source-map',
    mode: process.env.NODE_ENV || 'development',
    // Loaders
    module: {
        rules : [
            // JavaScript/JSX Files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // CSS Files
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                "css-loader",
                "postcss-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname,'src')
    },
    // Plugins
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/sw.js',
        }),
        new WebpackPwaManifest({
            filename: 'manifest.webmanifest',
            name: 'OfflineNewsApp',
            orientation: "portrait",
            display: "standalone",
            start_url: ".",
            short_name: 'NewsApp',
            description: 'Offline News Progressive Web App!',
            theme_color: "#21a094",
            background_color: "#21a094",
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            fingerprints: true,
            icons: [
                {
                    src: path.resolve('assets/icons/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                }
            ]
        })
    ]
};

// Exports
module.exports = config;