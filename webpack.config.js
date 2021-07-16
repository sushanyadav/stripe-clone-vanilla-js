const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBundleAnalyzer =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env, options) => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: "svg-inline-loader",
        },
        {
          test: /\.(scss|css)$/i,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude: [/node_modules/],
        },
        {
          test: /\.html$/,
          use: "html-loader",
        },
      ],
    },
    plugins: [
      new WebpackBundleAnalyzer(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "body",
        minify: true,
      }),
    ],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
  };
};
