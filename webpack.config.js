// webpack.config.js

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  // ... other configuration options ...
  module: {
    rules: [
      {
        test: /\.js$/, // applies to js files
        use: ["babel-loader"], // transpiles your js
        exclude: /node_modules/, // don't transpile node modules
      },
      {
        test: /\.s?[ac]ss$/, // applies to css/scss/sass files
        use: [
          MiniCssExtractPlugin.loader, // create bundled css file
          {
            loader: "css-loader", // resolves @import statements
            options: { url: false }, // don't resolve url() statements
          },
          "sass-loader", // compiles sass to css
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  return config;
}

// const config = {
//   // ... other configuration options ...
//   module: {
//     rules: [
//       {
//         test: /\.js$/, // applies to js files
//         use: ["babel-loader"], // transpiles your js
//         exclude: /node_modules/, // don't transpile node modules
//       },
//       {
//         test: /\.s?[ac]ss$/, // applies to css/scss/sass files
//         use: [
//           MiniCssExtractPlugin.loader, // create bundled css file
//           {
//             loader: "css-loader", // resolves @import statements
//             options: { url: false }, // don't resolve url() statements
//           },
//           "sass-loader", // compiles sass to css
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         loader: "file-loader",
//         options: {
//           name: "[path][name].[ext]",
//         },
//       },
//     ],
//   },
//   plugins: [new MiniCssExtractPlugin()],
// };