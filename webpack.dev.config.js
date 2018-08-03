const path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        //'webpack-dev-server/client?http://localhost:8080',
        //'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'client', 'index.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
    ],
    module: {
        rules: [{
            test: /.css?$/,
            loader: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.json$/,
            loader: 'json-loader',
            exclude: /(node_modules)/
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            query: {
                presets: ['react', 'env'],
               // plugins: ['transform-runtime']
            }
        },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'file-loader' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.ico(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css']
    }

}