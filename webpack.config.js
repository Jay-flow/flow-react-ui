const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const port = process.env.PORT || 3000
const isDevelopment = process.env.NODE_ENV !== "production"

module.exports = {
    mode: isDevelopment ? "development" : "production",
    entry: path.resolve(
        __dirname,
        "src",
        isDevelopment ? "index.tsx" : "export.tsx"
    ),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: isDevelopment ? "umd" : "commonjs2",
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            plugins: [
                                isDevelopment &&
                                    require.resolve("react-refresh/babel"),
                            ].filter(Boolean),
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new webpack.ProvidePlugin({
            React: "react",
        }),
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: "localhost",
        port: port,
        open: true,
    },
}
