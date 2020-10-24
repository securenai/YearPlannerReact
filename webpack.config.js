'use strict';

const path = require('path');

module.exports = {
	entry: './src/index.js',
	context: path.resolve(__dirname),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'pathOrUrlWhenProductionBuild',
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
		],
	},
	resolve: {},
	devtool: 'source-map',
	plugins: [],
};
