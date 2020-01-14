const path = require('path');
const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const clientConfig = {

	name: 'client',
	mode: sharedConfig.mode,
	entry: ['./app/index.js'],
	output: {
		path: sharedConfig.path,
		filename: 'bundle.js',
		publicPath: sharedConfig.output.publicPath || '/'
	},
	watch: process.env.NODE_ENV === 'production' ? false : true,
	watchOptions: {
	    aggregateTimeout: 300,
	    poll: 1000
	},
	module: {
		rules: sharedConfig.module.rules
	},
	optimization: {
	  minimize: process.env.NODE_ENV === 'production',
	  minimizer: [
	    new TerserPlugin({
	      test: /\.js(\?.*)?$/i,
	    })
	  ],
	},
	plugins: [
		new webpack.DefinePlugin({
			isServer: 'false'
		}),
		new MiniCssExtractPlugin({
			name: 'main.css',
			chunkFilename: '[id].css'
		}),
			new LoadablePlugin(),
		...sharedConfig.plugins
	]
};

module.exports = clientConfig;
