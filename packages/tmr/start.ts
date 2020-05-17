/**
 * Start the application.
 */

function start(args: string[]) {
  const defaultScript = "./app.js";
  const script = args.length > 0 ? args[0] : defaultScript;
  require(`${process.cwd()}/${script}`);
}

export default start;
