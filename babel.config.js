const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  presets: [
    ["@babel/preset-env"],
    "@babel/preset-react",
    "@babel/preset-typescript",
    [
      "@emotion/babel-preset-css-prop",
      { sourceMap: !prod, autoLabel: !prod, labelFormat: "[local]" },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      { corejs: { version: 3, proposals: true }, useESModules: true },
    ],
    "react-hot-loader/babel",
    [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/core",
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: "esm",
        camel2DashComponentName: false,
      },
      "core",
    ],
    [
      "babel-plugin-import",
      {
        libraryName: "@material-ui/icons",
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: "esm",
        camel2DashComponentName: false,
      },
      "icons",
    ],
    [
      "babel-plugin-import",
      {
        libraryName: "ramda",
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: "es",
        camel2DashComponentName: false,
      },
      "ramda",
    ],
  ],
};
