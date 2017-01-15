const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
			},
			{
				use: ['style-loader', 'css-loader'], //This adds the css into the bundle.js file
				//loader: ExtractTextPlugin.extract({
				//	loader: 'css-loader'
				//}) //1 -Will Generate a new css file.
				test: /\.css$/,
			},
			{
				use: [
						{
							loader: 'url-loader',
							options: {limit: 40000}
						},
						'image-webpack-loader'
					],
				test: /\.(jpe?g|png)$/,
			},
		]
	},
	plugins: [
		// new ExtractTextPlugin('style.css') //2 -Will Generate a new css file.
	]
}

module.exports = config;



//WP1 loaders WP2 modules