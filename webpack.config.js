const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  return {
    entry: {
      main: [
        path.resolve(__dirname, 'src', 'index.js'),
        path.resolve(__dirname, 'src', 'index.scss')
      ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { url: false }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin()],
    devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map'
  };
};