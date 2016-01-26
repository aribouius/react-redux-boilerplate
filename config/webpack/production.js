import path from 'path'
import webpack from 'webpack'
import config from '../application'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'

export default {
  devtool: 'source-map',
  entry: {
    main: './src/client'
  },
  output: {
    path: path.join(__dirname, '../../static/dist'),
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
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
        loader: 'babel'
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, '../../src'),
        loader: 'json'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, '../../src'),
        loader: ExtractTextPlugin.extract(
          'style-loader',
          `css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]`,
          'autoprefixer-loader?browsers=last 3 version'
        )
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(Object.assign({}, config.flags, {
      __CLIENT__ : true,
      __SERVER__ : false,
      'process.env': {
        'NODE_ENV' : JSON.stringify('production')
      }
    })),
    new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
    new ManifestPlugin({
      fileName : 'manifest.json',
      basePath : '/dist/'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        warnings : false
      }
    }),
  ]
}
