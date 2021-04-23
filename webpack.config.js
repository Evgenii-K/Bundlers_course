const { resolve } = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'js/main.js',
        path: resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader", 
                    // Compiles Sass to CSS
                    "sass-loader" ,
                ],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'image',
                }
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'sound',
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // publicPath: '/',
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
        }),
    ]
};