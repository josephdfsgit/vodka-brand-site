const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: [
            {
                directory: path.resolve(__dirname, 'dist'),
            },
        ],
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', 
                            outputPath: 'images', 
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Our/Berlin',
            filename: 'index.html',
            template: 'src/template.html', 
        }),
        new HtmlWebpackPlugin({
            title: 'Shop ~ Our/Berlin',
            filename: 'Shop.html',
            template: 'src/pages/Shop.html', 
        }),
        new HtmlWebpackPlugin({
            title: 'Photos ~ Our/Berlin',
            filename: 'Photos.html',
            template: 'src/pages/Photos.html', 
        }),
        new HtmlWebpackPlugin({
            title: 'Orders ~ Our/Berlin',
            filename: 'Orders.html',
            template: 'src/pages/Orders.html', // Use EJS syntax in this template
        }),
        new HtmlWebpackPlugin({
            title: 'Contact ~ Our/Berlin',
            filename: 'Contact.html',
            template: 'src/pages/Contact.html', // Use EJS syntax in this template
        }),
        new HtmlWebpackPlugin({
            title: 'About ~ Our/Berlin',
            filename: 'About.html',
            template: 'src/pages/About.html', // Use EJS syntax in this template
        }),
        new HtmlWebpackPlugin({
            title: 'Message Sent ~ Our/Berlin',
            filename: 'Message.html',
            template: 'src/pages/Message.html', // Use EJS syntax in this template
        }),
        new BundleAnalyzerPlugin(),
        new Dotenv(),
    ],
};
