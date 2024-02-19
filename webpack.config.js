const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "multi-step-form",
      favicon: "./src/assets/images/favicon-32x32.png",
      filename: "./dist/index.html",
      template: "./src/template.html",
    }),
  ],
  devtool: "inline-source-map",
  mode: "development",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff2|ttf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
