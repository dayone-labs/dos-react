const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = (env) => {	
	const PROD = (env && env.production) || process.env.NODE_ENV == 'production'

	const webpackPlugins = [
		new webpack.ProvidePlugin({
			'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
		}),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module) {
				// this assumes your vendor imports exist in the node_modules directory
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),
		new CopyWebpackPlugin([
			{from: path.resolve(__dirname, 'src', 'index.html')}
		])
	]

	if(PROD) {
		webpackPlugins.push(new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			unused: true,
			dead_code: true, // big one--strip code that will never execute
			warnings: false, // good for prod apps so users can't peek behind curtain
			drop_debugger: true,
			conditionals: true,
			evaluate: true,
			drop_console: true, // strips console statements
			sequences: true,
			booleans: true,
			compress: {
				warnings: false, // Suppress uglification warnings
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				screw_ie8: true
			},
			output: {
				comments: false,
			},
		}))
		webpackPlugins.push(new webpack.optimize.AggressiveMergingPlugin()),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	}

	return {
		entry: {
			'main': path.resolve(__dirname, 'src', 'main.jsx'),
		},
		stats: {
			colors: true
		},
		resolve: {
			modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
			extensions: ['.js', '.jsx', '.json'],
		},
		output: {
			filename: '[name].js'
		},
		module: {
			loaders: [{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /\.test\.js?$/],
			}, {
				test: /\.json$/,
				exclude: /\.test\.json$/,
				loader: 'json-loader'
			}, {
				test: /\.css/,
				use: [ 'style-loader', 'css-loader' ]
			}, ]
		},
		plugins: webpackPlugins,
		devServer: {
			contentBase: './src',
			host: '0.0.0.0',
			port: 8080,
			proxy: {
				'/api/*': {
					target: 'http://localhost:9000',
					rewrite: function(req) {
						req.url = req.url.replace(/^\/api/, '');
					}
				},
			}
		},
	}
}

