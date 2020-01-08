const path = require('path');
const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const clientConfig = {

	name: 'client',
	mode: sharedConfig.mode,
	entry: ['babel-polyfill', './app/index.js'],
	output: {
		path: sharedConfig.path,
		filename: 'bundle.js',
		publicPath: sharedConfig.publicPath
	},
	watch: process.env.NODE_ENV === 'production' ? false : true,
	watchOptions: {
	    aggregateTimeout: 300,
	    poll: 1000
	},
	module: {
		rules: sharedConfig.module.rules
	},

	plugins: [
		new MiniCssExtractPlugin({
			name: 'main.css',
			chunkFilename: '[id].css'
		}),
		new webpack.DefinePlugin({
			isServer: 'false',
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		}),
		...sharedConfig.plugins
	]
};

module.exports = clientConfig;
