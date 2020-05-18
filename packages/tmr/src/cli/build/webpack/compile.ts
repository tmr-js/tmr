/**
 * Wrapper of webpacks compile function.
 */

import webpack from "webpack";

type CompileOutcome = {
  errors: string[];
  warnings: string[];
};

function extractErrorsAndWarnings(stat: webpack.Stats): CompileOutcome {
  const { errors, warnings } = stat.toJson("errors-warnings");
  console.log('errors', errors);
  console.log('warnings', warnings);
  return { errors, warnings };
}

async function compile(config: webpack.Configuration): Promise<CompileOutcome> {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        reject(err);
      }
      if (stats.hasErrors()) {
        // Handle errors here
      }
      resolve(extractErrorsAndWarnings(stats));
    });
  });
}

export default compile;
