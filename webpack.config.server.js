const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const serverConfig = {
name: 'server',
mode: sharedConfig.mode,
entry: ['./server/index.js'],
target: 'node',
externals: [nodeExternals()],
// externals: [nodeExternals({whitelist: ['webpack/hot/poll?1000']})],
output: {
  path: sharedConfig.path,
  filename: 'server.js',
  publicPath: sharedConfig.output.publicPath || '/'
},
watch: process.env.NODE_ENV === 'production' ? false : true,
watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
},
optimization: {
  minimize: process.env.NODE_ENV === 'production',
  minimizer: [
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      cache: true
    }),
    new OptimizeCssAssetsPlugin({})
  ],
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 6,
    maxInitialRequests: 4,
    automaticNameDelimiter: '~',
    automaticNameMaxLength: 30,
    cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
  }
},
module: {
  rules: [
    ...sharedConfig.module.rules
  ]
},

plugins: [
  new CleanWebpackPlugin('./dist'),
  new StartServerPlugin('server.js'),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  ...sharedConfig.plugins
]
};

if(process.env.NODE_ENV !== 'production') {
  serverConfig.plugins.unshift(new webpack.EvalSourceMapDevToolPlugin())
  serverConfig.plugins.unshift(new DotEnvPlugin());
  serverConfig.plugins.push(
  new webpack.DefinePlugin({
      "process.env": {
          "BUILD_TARGET": JSON.stringify('server'),
          "DB_USERNAME": JSON.stringify(process.env.DB_USERNAME),
          "DB_PASSWORD": JSON.stringify(process.env.DB_PASSWORD),
          "DB_HOST": JSON.stringify(process.env.DB_HOST),
          "DB_NAME": JSON.stringify(process.env.DB_NAME),
          "AWS_ACCESS_KEY_ID": JSON.stringify(process.env.AWS_ACCESS_KEY_ID),
          "AWS_SECRET_ACCESS_KEY": JSON.stringify(process.env.AWS_SECRET_ACCESS_KEY),
          "AWS_BUCKET": JSON.stringify(process.env.AWS_BUCKET),
          "PORT": JSON.stringify(process.env.PORT) || 3000,
          "NODE_ENV": JSON.stringify(process.env.NODE_ENV),
          "NODE_OPTIONS": JSON.stringify(process.env.NODE_OPTIONS)
      }
  }))

  serverConfig.externals = [nodeExternals({whitelist: ['webpack/hot/poll?1000']})];
  serverConfig.entry.unshift('webpack/hot/poll?1000');

}
module.exports = serverConfig;
