module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak- style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": [
      "warn",
      { allow: ["clear", "info", "error", "dir", "trace"] },
    ],
  },
};


// when ever using the following line in the code
// React.PropTypes 

// import PropTypes from 'prop-types';

// and use the PropType object without the React. part
