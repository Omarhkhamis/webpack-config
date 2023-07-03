const path = require("path");
const ReactRefresh = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";

const plugins = [
  new MiniCssPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
  new CleanWebpackPlugin(),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
} else {
  plugins.push(new ReactRefresh());
}
module.exports = {
  mode: mode,

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
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
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
};
