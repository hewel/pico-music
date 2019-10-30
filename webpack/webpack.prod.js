const merge = require("webpack-merge");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    splitChunks: {
      // include all types of chunks
      minSize: 30000,
      maxSize: 800000,
      chunks: "async",
    },
  },
  devtool: false,
  plugins: [new ProgressBarPlugin()],
});
