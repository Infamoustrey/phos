const HTMLWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, '..', 'src', 'frontend', 'tsconfig.json'),
        })]
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
