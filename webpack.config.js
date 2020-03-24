const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const app = {
	disturl: path.resolve(__dirname, 'dist'),
	publicurl: path.resolve(__dirname, 'public'),
	templateurl: path.join(__dirname, 'public/', 'index.html')
};

const modules = {
	rules: [
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: ['file-loader']
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader']
		},
		{
			enforce: 'pre',
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'eslint-loader'
		},
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: ['babel-loader']
		}
	]
};

var plugins = [];
if (process.env.NODE_ENV === 'production') {
	plugins = [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: app.templateurl
		}),
		new CopyWebpackPlugin([{ from: app.publicurl, to: app.disturl }], {
			ignore: ['index.html']
		}),
		new ImageminPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			pngquant: {
				quality: '95-100'
			}
		})
	];
} else {
	plugins = [new webpack.HotModuleReplacementPlugin(), new DashboardPlugin()];
}

const aliases = {
	alias: {
		'@app': path.resolve(__dirname, 'src/'),
		'@pages': path.resolve(__dirname, 'src/pages/'),
		'@components': path.resolve(__dirname, 'src/components/'),
		'@api': path.resolve(__dirname, 'src/api/'),
		'@routes': path.resolve(__dirname, 'src/routes/'),
		'@layouts': path.resolve(__dirname, 'src/layouts/'),
		'@utils': path.resolve(__dirname, 'src/utils/'),
		'@styles': path.resolve(__dirname, 'src/styles/'),
		'@lang': path.resolve(__dirname, 'src/lang/')
	}
};

const optimizations = {
	splitChunks: {
		chunks: 'async',
		minSize: 30000,
		maxSize: 0,
		minChunks: 1,
		maxAsyncRequests: 6,
		maxInitialRequests: 4,
		automaticNameDelimiter: '~',
		automaticNameMaxLength: 30,
		cacheGroups: {
			defaultVendors: {
				test: /[\\/]node_modules[\\/]/,
				priority: -10
			},
			default: {
				minChunks: 2,
				priority: -20,
				reuseExistingChunk: true
			}
		}
	}
};

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: app.disturl
	},
	devServer: {
		hot: true,
		contentBase: app.disturl,
		publicPath: '/',
		historyApiFallback: true
	},
	module: modules,
	plugins: plugins,
	resolve: aliases,
	optimization: optimizations
};
