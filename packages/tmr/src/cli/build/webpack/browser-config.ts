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
            runtime: "automatic",
          },
        ],
      ],
    },
  };
  return {
    entry: {
      // TODO detect entry points directly.
      HelloComponent: resolve(baseDir, "HelloComponent.jsx"),
    },
    output: {
      path: resolve(baseDir, ".tmr/browser"),
    },
    mode: "development", // do not minify app.js for development
    target: "web",
    resolve: {
      extensions: [".js", ".jsx"], // TODO: support ".mjs", ".tsx", ".ts", ".json", ".wasm"
      alias: {
        "babel-loader": resolve(__dirname, "../../../node_modules/@tmr/browser/node_modules/react/"),
      },
    },
    externals: {
        
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
        "babel-loader": resolve(__dirname, "../../../node_modules/babel-loader/"),
      },
    },
  };
}

export default serverConfig;
