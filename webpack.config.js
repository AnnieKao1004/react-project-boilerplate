const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devServer: { static: "./public" },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: "file-loader", options: { name: "img/[name].[ext]" } }],
      },
      { test: /\.svg$/i, issuer: /\.[jt]sx?$/, use: ["@svgr/webpack"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new MiniCssExtractPlugin({ filename: "css/[name].[hash:3].css" }),
  ],
};
