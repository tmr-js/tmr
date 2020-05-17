import webpack from "webpack";

function printErrorWarning(stat: webpack.Stats): void {
  const { errors, warnings } = stat.toJson("errors-warnings");
  console.log(errors);
  console.log(warnings);
}

function getServerConfig(): webpack.Configuration {
  const baseDir = process.cwd();
  return {
    entry: {
      // TODO detect entry points directly.
      app: `${baseDir}/app.js`,
    },
    output: {
      path: `${baseDir}/build`,
    },
    name: 'server',
    mode: 'production',
    target: 'node',
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
