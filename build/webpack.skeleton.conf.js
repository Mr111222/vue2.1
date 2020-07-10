const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')
const nodeExternals = require('webpack-node-externals')

function resolve (dir) {
	return path.join(__dirname, dir)
} 

module.exports = merge(baseWebpackConfig, {
	target: 'node',
	devtool: false,
	entry:{
		app: resolve('../src/common/entry-skeleton.js')
	},
	output: Object.assign({}, baseWebpackConfig.output,{
		libraryTarget: 'commonjs2'
	}),
	externals: nodeExternals({
		whitele: /\.css$/
	}),
	plugins: []
})