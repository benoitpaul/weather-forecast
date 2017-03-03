var path = require('path');
//var webpack = require('webpack');
const validate = require('webpack-validator');


var config = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    devtool: 'source-map',
    eslint: {
        configFile: './.eslintrc'
    },
    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }, ],
        loaders: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader'
            },
            {
                test: /\.scss$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader'
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader?name=[path][name].[hash].[ext]'
            },
        ]
    },
};

module.exports = validate(config);