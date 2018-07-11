var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const extractMiniCSS = new ExtractTextPlugin('assets/styles/[name].min.css');

module.exports = {
    entry: ['babel-polyfill', path.normalize(__dirname + '/src/js/main')],
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src', 'js')],
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
                include: [path.resolve(__dirname, 'src', 'css')]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        extractMiniCSS,
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
};
