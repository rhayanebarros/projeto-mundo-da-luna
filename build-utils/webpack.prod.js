// const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

module.exports = {
    devtool: "source-map",
    module: {
        rules: [
            {
              test: /^(?!.*vendors).*\.(s)?css$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../',
                  },
                },
                {
                  loader: 'css-loader',
                },
                {
                  loader: 'postcss-loader',
                },
                {
                  loader: 'sass-loader',
                  options: {
                    outputStyle: 'compressed',
                  },
                },
              ],
            },
            {
              test: /vendors.scss$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../',
                  },
                },
                {
                  loader: 'css-loader',
                },
                {
                  loader: 'postcss-loader',
                },
                {
                  loader: 'sass-loader',
                  options: {
                    outputStyle: 'compressed',
                  },
                },
              ],
            },
          ],
    },
    plugins:[
        new UglifyJsWebpackPlugin({
            sourceMap: true
        }),
        new OptimizeCSSAssets(),
        // new CompressionWebpackPlugin({
        //     filename: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: /\.(js|html|css)$/,
        //     minRatio: 0.8,
        // }),
    ],
};