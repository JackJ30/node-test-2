const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: mode,
    entry: path.resolve(__dirname, "src"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "swc-loader",
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ]
};