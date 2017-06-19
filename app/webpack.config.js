const Webpack = require('webpack');
const path    = require('path');

module.exports = {
	entry : './app.js',
	output: {
	    path: path.resolve(__dirname, './'),
	    filename: 'app-prod.js'
	},
	devServer: {
  		contentBase: path.join(__dirname, "./"),
  		compress: true,
  		port: 9000
	}
}