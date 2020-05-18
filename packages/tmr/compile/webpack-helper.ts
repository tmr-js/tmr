import webpack from "webpack";

function printErrorWarning(stat: webpack.Stats): void {
  const { errors, warnings } = stat.toJson("errors-warnings");
  console.log(errors);
  console.log(warnings);
}

function getServerConfig(): webpack.Configuration {
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
            pragma: "tmr.createElement",
            pragmaFrag: "tmr.Fragment",
          },
        ],
      ],
    },
  };
  return {
    entry: {
      // TODO detect entry points directly.
      app: `${baseDir}/app.js`,
    },
    output: {
      path: `${baseDir}/build`,
    },
    mode: "production",
    target: "node",
    resolve: {
      extensions: [".js", ".jsx"], // TODO: support ".mjs", ".tsx", ".ts", ".json", ".wasm"
    },
    externals: {
      // TODO use webpack-node-externals
      express: "commonjs express",
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
        "babel-loader": `${baseDir}/node_modules/@tmr/tmr/node_modules/babel-loader/`,
      },
    },
  };
}

export function compileServer() {
  console.log("Server Config", getServerConfig());
  webpack(getServerConfig(), (err, stats) => {
    if (err) {
      console.log(err);
    }
    if (stats.hasErrors()) {
      // Handle errors here
    }
    printErrorWarning(stats);
  });
}
