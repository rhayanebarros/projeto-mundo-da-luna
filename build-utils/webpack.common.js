const commonPaths = require("./common-paths");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
    mode:'none',
    entry: {
        polyfills: ['babel-polyfill'],
        vendors: ['./src/sass/vendors.scss'],
        main: [
            './src/js/main.js',
            './src/sass/main.scss',
        ],
    },
    output: {
        filename: "js/[name].js",
        path: commonPaths.outpuPath,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },                
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                loaders: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    },
                }],
                exclude: [/\/(font(s)?)\//],
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'svg/',
                    },
                  },
                ],
                exclude: [/\.\/(font(s)?)\//, /[\\/]node_modules[\\/]/],
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
            {
                test: /\.(s)?htm(l)?$/,
                use: [
                    {
                      loader: 'html-loader',
                      options: {
                        attrs: [':poster', ':href', ':src', ':data-content'],
                        interpolate: true,
                      },
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'src'),
        compress: true,
        port: 3000,
        watchContentBase: true,
        open: true,
        clientLogLevel: 'none',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
        }),
        new CleanWebpackPlugin(['dist'], {
            root: `${__dirname}/../`,
        }),
    ],
};

module.exports = config;