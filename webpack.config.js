const MiniCssPlugin = require("mini-css-extract-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}
module.exports = {
  mode: mode,
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          MiniCssPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssPlugin()],
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
};
