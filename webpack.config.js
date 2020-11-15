'use strict';

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	context: path.resolve(__dirname),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9000,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
			},
			{
				test: /\.(png|jpg)$/,
				use: [{loader: 'url-loader'}],
			},
			{
				test: /\.svg$/,
				use: ['file-loader'],
			},
		],
	},
	resolve: {},
	plugins: [],
};
