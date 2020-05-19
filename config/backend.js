const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');

module.exports = {
    entry: './src/backend/main.ts',
    target: 'electron-main',
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
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'backend.js',
        path: dist,
    },
};
