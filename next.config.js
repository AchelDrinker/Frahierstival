const path = require('path')
const glob = require('glob')

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
                includePaths: [
                  path.join(__dirname, 'styles'),
                  path.join(__dirname, 'node_modules')
                ]
              }
            }
          }
        ]
      }
    )
    return config
  },
  // exportPathMap: function(defaultPathMap) {
  //   return {
  //     '/': { page: '/' }
  //   }
  // }
}