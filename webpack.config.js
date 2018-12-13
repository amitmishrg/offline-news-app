// Imports
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// Webpack Configuration
const config = {
    entry: './src/index.js',
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
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
        })
    ]
};

// Exports
module.exports = config;