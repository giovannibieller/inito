const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { I18NextHMRPlugin } = require('i18next-hmr/plugin');
const { choosePort } = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');

const host = 'localhost';
const desiredPort = 8080;

const app = {
  disturl: path.resolve(__dirname, 'dist'),
  publicurl: path.resolve(__dirname, 'public'),
  localesurl: path.resolve(__dirname, 'public/assets/i18n/translations'),
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

const getPlugins = m => {
  let plugins = [];
  if (m === 'production') {
    plugins = [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: app.publicurl,
            globOptions: {
              ignore: [app.templateurl]
            },
            to: app.disturl
          }
        ]
      }),
      new HtmlWebpackPlugin({
        template: app.templateurl
      }),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
          quality: '95-100'
        }
      })
    ];
  } else {
    plugins = [
      new HtmlWebpackPlugin({
        template: app.templateurl
      }),
      new I18NextHMRPlugin({
        localesDir: app.localesurl
      })
    ];
  }
  return plugins;
};

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
    '@lang': path.resolve(__dirname, 'src/lang/'),
    '@context': path.resolve(__dirname, 'src/context/'),
    '@websocket': path.resolve(__dirname, 'src/websocket/'),
    '@events': path.resolve(__dirname, 'src/events/')
  }
};

const optimizations = {
  splitChunks: {
    chunks: 'async',
    maxSize: 20000,
    minChunks: 1,
    maxAsyncRequests: 6,
    maxInitialRequests: 4,
    automaticNameDelimiter: '~',
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

const createConfig = async (env, argv) => {
  const port = await choosePort(host, desiredPort);
  if (!port) {
    process.exit();
  }

  return {
    mode: argv.mode,
    entry: {
      app: './src/index.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: app.disturl,
      clean: true
    },
    devServer: {
      // static: app.disturl,
      static: app.publicurl,
      hot: true,
      historyApiFallback: true,
      onListening: () => {
        openBrowser(`http://${host}:${port}`);
      },
      port: port,
      host: host
    },
    module: modules,
    plugins: getPlugins(argv.mode),
    resolve: aliases,
    optimization: optimizations,
    performance: { hints: false }
  };
};

module.exports = createConfig;
