const webpack = require('webpack');

module.exports = {
    entry:'./src/index.js',
    module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: ['babel-loader']
     },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=2048',
          'img',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=2048',
      },
      {
      test: /\.scss$/,
      loaders: 'style-loader!css-loader!sass-loader',
    },
   ]
 },
 resolve: {
   extensions: ['*', '.js', '.jsx']
 },
    output: {
        path: `${__dirname}/../middleware/src/main/resources/static`,
        publicPath: '/test-0.1.0/',
        filename: 'bundle.js',
    },
    devServer: {
      port: 2311,
      contentBase: './public',
      historyApiFallback: true,
      hot: true,
      proxy: {
        '/api/*': 'http://localhost:8080/test-0.1.0/',
        '/test-0.1.0/*': {
          target: 'http://localhost:8080',
          rewrite: (req) => {
            const newRec = req;
            newRec.url = req.url.replace(/^\/test-0.1.0/, '');
            return newRec;
          },
        },
      },
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"',
        }),
        ],
};
