const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[hash].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            publicPath: './dist/styles',
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif|webp)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                }, 'image-webpack-loader'],
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            title: 'Quotes',
            mobile: true,
            lang: 'en-US',
            appMountId: 'root'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css'
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCssPlugin(),
            new TerserPlugin({
                cache: true,
                parallel: true,
            }),
        ],
    }
}