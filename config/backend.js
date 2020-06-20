const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');

module.exports = {
    entry: './src/backend/main.ts',
    target: 'electron-main',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: path.resolve(__dirname, '..', 'src', 'backend', 'tsconfig.json')
                }
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
