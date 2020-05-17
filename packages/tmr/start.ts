/**
 * Start the application.
 */

import child_process from "child_process";

function start() {
  const app = child_process.exec("node app.js");
  if (app.stdout) {
    app.stdout.on("data", (data) => {
      console.log(data);
    });
  }
  if (app.stderr) {
    app.stderr.on("data", (data) => {
      console.error(data);
    });
  }
}

export default start;
