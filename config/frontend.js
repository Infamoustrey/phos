const HTMLWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');

const devServer =
    process.env.NODE_ENV === 'development'
        ? {
              contentBase: dist,
              compress: true,
              port: 9000,
          }
        : null;

module.exports = {
    entry: './src/frontend/main.ts',
    target: 'electron-renderer',
    devServer,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: 'index.html',
            template: './src/frontend/index.html',
        }),
    ],
    output: {
        filename: 'frontend.js',
        path: dist,
    },
};
