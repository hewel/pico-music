const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const join = (...paths) => path.join(__dirname, "../", ...paths);
const isProd = process.env.NODE_ENV === "production";

const HtmlPluginConfig = {
  title: "React App",
  filename: "index.html",
  template: join("public", "index.html"),
  favicon: join("public", "favicon.png"),
};

const plugins = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // all options are optional
    filename: "[name].css",
    chunkFilename: "[name].css",
    ignoreOrder: true, // Enable to remove warnings about conflicting order
  }),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin(HtmlPluginConfig),
];

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  output: {
    path: join("dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts", ".tsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
      Components: join("src/Components/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        include: join("src"),
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          { loader: "css-loader", options: { sourceMap: true } },
          ...(isProd ? ["postcss-loader"] : []),
        ],
      },
    ],
  },
  performance: { maxEntrypointSize: 500000, maxAssetSize: 300000 },
  stats: {
    all: false,
    errors: true,
    warnings: true,
    logging: "warn",
    chunks: true,
    chunksSort: "id",
    colors: true,
  },
  plugins,
};
