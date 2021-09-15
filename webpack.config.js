const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "src/index.js" ),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.png/,
        exclude: /node_modules/,
        use: "url-loader"
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
