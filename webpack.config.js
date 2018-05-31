var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.scss$/, use: ExtractTextPlugin.extract(['style-loader','css-loader', 'sass-loader']) }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            title: 'Starter Webpack',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin("app.css")
    ]
}