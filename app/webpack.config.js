const path = require('path');

module.exports = {
	entry : {
        appprod: ['./app.js', './services/appService.js', './components/alumno/alumno.js', './controllers/appController.js']
    },
	output: {
	    path: path.resolve(__dirname, './'),
	    filename: '[name].js'
	},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
	devServer: {
  		contentBase: path.join(__dirname, "./"),
  		compress: true,
  		port: 9000
	}
}