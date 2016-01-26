import path from 'path'
import webpack from 'webpack'
import config from '../application'
import babelrc from '../babel'

// add react-transform-hmr plugin to babel
// config here since it throws errors when
// executed during runtime transpilation
// e.g. can't be added to .babelrc
babelrc.plugins.push(['react-transform', {
  transforms: [{
    transform: 'react-transform-hmr',
    imports: ['react'],
    locals: ['module']
  }]
}])

export default {
  devtool: 'inline-eval-cheap-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?timeout=2000&reload=true',
    './src/client'
  ],
  output: {
    path: path.join(__dirname, '../../static/dist'),
    filename: 'main.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '../../src'),
        loader: 'babel',
        query: babelrc
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, '../../src'),
        loader: 'json'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, '../../src'),
        loaders: [
          'style-loader',
          `css-loader?modules&importLoaders=1&localIdentName=[path][name]-[local]`,
          'autoprefixer-loader?browsers=last 3 version'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(Object.assign({}, config.flags, {
      __CLIENT__ : true,
      __SERVER__ : false
    }))
  ]
}
