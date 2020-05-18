/**
 * Start the application.
 */

import { resolve } from "path";

function start(args: string[]) {
  const defaultScript = "./.tmr/app.js";
  const script = args.length > 0 ? args[0] : defaultScript;
  require(resolve(process.cwd(), script));
}

export default start;
