const webpack = require('webpack');

module.exports = {
    name:'js',
    entry: {
        'index':           './src/js/index.js'
    },
    output: {
        path: './public/js',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel"
        }, {
            test: /\.css$/,
            loader: 'style!css!less'
        }, {
                test: /\.less$/,
                loader: 'style!css!less'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })
    ]
};
