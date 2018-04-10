const path = require('path');
const webpack = require('webpack');

module.exports = {
	cache: true,
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		host: process.env.HOST, // Defaults to `localhost`

		overlay: {
			errors: true,
			warnings: true
		},
		port: 3002,
		// port: process.env.PORT, // Defaults to 8080
		// Display only errors to reduce the amount of output.
		stats: 'errors-only',
		watchContentBase: true,
		watchOptions: {
			ignored: 'node_modules'
		}
	},
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'bundle.js'
	},
	// plugins: [
	// 	// Ignore node_modules so CPU usage with poll
	// 	// watching drops significantly.
	// 	new webpack.WatchIgnorePlugin([
	// 		path.join(__dirname, 'node_modules')
	// 	])
	// ],
	resolve: {
		extensions: ['.js']
	}
};