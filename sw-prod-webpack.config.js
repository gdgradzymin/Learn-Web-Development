const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'sw.ts'),
  output: {
    path: path.join(__dirname, 'dist', 'my-growth'),
    filename: 'sw.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          onlyCompileBundledFiles: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.wasm', '.mjs', '.js', '.json']
  }
};
