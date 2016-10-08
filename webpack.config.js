var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/js/app.js',
	output: { path: __dirname+'/dist/js', filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
        		}
			}
  		]
	},
};
