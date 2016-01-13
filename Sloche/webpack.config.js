var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
    ]
  }
};