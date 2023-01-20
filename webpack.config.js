const path = require('path');

module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'MyLibrary',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  mode: 'production',
};
