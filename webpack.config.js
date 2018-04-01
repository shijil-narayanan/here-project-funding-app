var debug = process.env.NODE_ENV !== "production";

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var postCss = require('postcss');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require("extract-text-webpack-plugin");
var alias = require('./alias.config');

var SRC = path.resolve(__dirname, "src");
var DIST = path.resolve(__dirname, "dist");
var TEMPLATES_PATH = SRC + "/templates";

var HTML_CONFIG = {
    template: TEMPLATES_PATH + '/index.html',
    title: "Here maps",
    filename: DIST + "/index.html",
    minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
    }
}

module.exports = {
    entry: ["babel-polyfill",SRC + "/Index.jsx"],
    output: {
        path: DIST,
        filename: "app.min.js"
    },
    module: {
        loaders: [
            {
		        test : /\.jsx?/,
		        include : SRC,
				loader: "babel-loader",
				query: {
                  "presets" : ["es2015", "react","stage-3"]
				}
      		},{
                test: /\.less$/,
                loader: extractTextPlugin.extract({
                    fallback: "style-loader",
                    loader: [{
                        loader: "css-loader"
                    }, {
                        loader: "postcss-loader"
                    }, {
                        loader: "less-loader"
                    }],
                })
            },{
                test: /\.(woff|woff2|ttf|eot|png|svg|jpg)$/,
                loader: "url-loader"
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin(HTML_CONFIG),
        new extractTextPlugin("app.min.css"),
        require('autoprefixer'),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    resolve: {
        modules: [SRC,"node_modules"],
        alias: alias,
        extensions: [".js",".jsx",".json"]
    }
};
