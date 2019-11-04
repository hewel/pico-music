module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  extends: [
    // "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint", "emotion", "react-hooks"],
  rules: {
    semi: [2, "never"],
    "linebreak-style": "off",
    "react/jsx-indent": [2, 2],
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",

    "import/no-unresolved": [2, { ignore: [`U|utils.*`] }],
    "import/extensions": [2, "never"],
    "import/no-extraneous-dependencies": [
      2,
      { devDependencies: ["webpack/**/*", "webpack.*"] },
    ],
    "react/jsx-props-no-spreading": [1, { html: "ignore" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/member-delimiter-style": [
      2,
      {
        multiline: {
          delimiter: "none",
          requireLast: true,
        },
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      extends: [
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      rules: {
        // 'react/jsx-indent': 'off',
        // 'prettier/prettier': 'off',
        // "react-hooks/rules-of-hooks": "error",
        // "react-hooks/exhaustive-deps": "warn",
      },
    },
    {
      files: [
        "*.json",
        "*.html",
        "*.css",
        "*.less",
        "*.scss",
        "*.config.*",
        "*.eslintrc.*",
        "webpack/**/*",
      ],
      rules: {
        semi: [2, "always"],
      },
    },
  ],
};
