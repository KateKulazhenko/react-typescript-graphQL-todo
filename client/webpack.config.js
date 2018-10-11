let path = require("path");

module.exports = {
  module: {
    entry: {
      app: "./index.tsx"
    },
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      }
    ]
  }
};
