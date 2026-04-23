import path from "node:path";
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export default {
    mode: "production",
    entry: {
        app: "./src/index.js",
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html",
        title: "Production",
        }),
    new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader",MiniCssExtractPlugin.loader,"css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
            test: /\.html$/i,
            use: ["html-loader"],
            },

        ],
    },
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`).
          // Uncomment the next line to keep JS minimizers and add CSS minimizer:
          `...`,
          new CssMinimizerPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
};