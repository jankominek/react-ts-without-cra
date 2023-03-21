const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "index.js"
    },
    plugin: [
        new HTMLWebpackPlugin({
            template: ""
        })
    ],

    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },

    resolve: {
        extention: [ '.tsx', '.ts', '.js']
    }
}