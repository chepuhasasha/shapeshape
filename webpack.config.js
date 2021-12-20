const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const DEV = {
    mode: 'development',
    entry: './src/dev.js',
    devtool: 'inline-source-map',
    devServer: {
      allowedHosts: 'all'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  }

  const PROD = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: 'index.js',
      library: {
        name: 'ShapeShape',
        type: 'umd',
      },
      clean: true,
    },
  }

  return env.production ? PROD : DEV
};