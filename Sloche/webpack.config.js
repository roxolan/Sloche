var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  } 
};