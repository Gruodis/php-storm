const path = require("path");

module.exports = {
    entry: './src/index.js',
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',

                ]
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
}