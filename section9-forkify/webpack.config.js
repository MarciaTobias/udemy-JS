const path = require('path');
// to include de html packgage plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // this will bundle together those two
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    // property plugin, plugins basically receives an array of all plugins that we are using
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {   
                // irregular expression, we want test all js files
                test: /\.js$/,
                // this is excluded durante to test
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};