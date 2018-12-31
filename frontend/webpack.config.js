const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const STATIC_DIR = path.resolve(BUILD_DIR, '../../backend/src/sleek/static');
const RESOURCES_DIR = path.resolve(__dirname, 'resources');

module.exports = (env, argv) => {
    console.log(argv.mode);

    return {
        entry: [
            "@babel/polyfill",
            "./src/index.js"
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
            ]
        },
        output: {
            path: BUILD_DIR,
            filename: "static/bundle.js",
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: `${BUILD_DIR}/index.html`
            }),
            new FileManagerPlugin({
                onEnd: {
                    copy: [
                        { source: `${BUILD_DIR}/index.html`, destination: STATIC_DIR },
                        { source: `${BUILD_DIR}/static/bundle.js`, destination: STATIC_DIR },
                        { source: `${RESOURCES_DIR}/favicon.ico`, destination: `${BUILD_DIR}/static/favicon.ico` },
                        { source: `${RESOURCES_DIR}/favicon.ico`, destination: `${STATIC_DIR}/favicon.ico` },
                    ]
                }
            })
        ],
        optimization: {
            minimizer: [new UglifyJsPlugin()]
        },
        devServer: {
            proxy: {
                '/api': 'http://localhost:5000'
            }
        },
        devtool: argv.mode === 'development' ? "eval-source-map" : "source-map",
    }
};
