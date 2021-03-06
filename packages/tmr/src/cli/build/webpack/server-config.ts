/**
 * Generate server config for webpack.
 */

import webpack from "webpack";
import { resolve } from "path";

function serverConfig(): webpack.Configuration {
  const baseDir = process.cwd();
  const defaultLoader = {
    loader: "babel-loader",
    options: {
      presets: [
        [
          require("@babel/preset-react"),
          {
            // If classic runtime is no longer supported, we need
            // to create our own babel-plugin-transform-react-jsx
            runtime: "classic",
            // pragma: "tmr.createElement",
            // pragmaFrag: "tmr.Fragment",
          },
        ],
      ],
    },
  };
  return {
    entry: {
      // TODO detect entry points directly.
      app: resolve(baseDir, "app.js"),
    },
    output: {
      path: resolve(baseDir, ".tmr"),
    },
    mode: "development", // do not minify app.js for development
    target: "node",
    resolve: {
      extensions: [".js", ".jsx"], // TODO: support ".mjs", ".tsx", ".ts", ".json", ".wasm"
      alias: {
        // "@tmr/server": resolve(__dirname, "../../node_modules/@tmr/server/"),
      },
    },
    externals: {
      // TODO use webpack-node-externals
      express: "commonjs express",
      "@tmr/tmr": "commonjs @tmr/tmr",
    },
    module: {
      rules: [
        {
          test: /\.(tsx|ts|js|mjs|jsx)$/,
          include: [baseDir],
          exclude: (path: string) => {
            return /node_modules/.test(path);
          },
          use: [defaultLoader],
        },
      ],
    },
    resolveLoader: {
      alias: {
        "babel-loader": resolve(__dirname, "../../../../node_modules/babel-loader/"),
      },
    },
  };
}

export default serverConfig;
