const path = require('path');

module.exports = {
  components: 'src/components/ui/**/*.{js,jsx,ts,tsx}',
  defaultExample: true,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ]
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
    },
    resolve: {
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
    }
  },
  require: [path.join(__dirname, './src/styles/globals.module.css')]
};
