const webpack = require('webpack');

function buildDevelopementConfig(env, dirname) {
  console.log('Start build for NODE_ENV: ', env.NODE_ENV);

  return {
    entry: dirname + '/src/index.tsx',
    devtool: 'cheap-module-eval-source-map',
    output: {
      path: dirname + '/dist',
      filename: 'index.js',
      publicPath: '/',
      sourceMapFilename: 'bundle.map'
    },
    mode: 'development',
    resolve: {
      extensions: ['.js', '.json', '.ts', '.jsx', '.tsx']
    },
    devServer: {
      host: '0.0.0.0',
      contentBase: dirname + '/src',
      hotOnly: true,
      overlay: true,
      publicPath: '/',
      watchContentBase: false
    },
    module: {
      rules: [
        {
          test: /\.(tsx?)$/i,
          include: dirname + '/src',
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    debug: true,
                    target: {
                      browsers: ['cover 99%']
                    }
                  }
                ],
                '@babel/preset-react',
                '@babel/typescript'
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                'react-hot-loader/babel'
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
}

module.exports = buildDevelopementConfig;
