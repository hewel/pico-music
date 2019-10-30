const { HotModuleReplacementPlugin } = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    // host: "0.0.0.0",
    port: 7575,
    hot: true,
    clientLogLevel: "warning",
  },
  stats: {
    chunks: false,
    errorDetails: true,
    modules: true,
    excludeModules: moduleSource => {
      const isExclude = [/.*node_modules?.*/, /^\(webpack\).*/].some(reg => reg.test(moduleSource));
      return isExclude || !moduleSource;
    },
  },
  plugins: [new HotModuleReplacementPlugin()],
});
