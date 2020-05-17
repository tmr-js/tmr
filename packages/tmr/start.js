/**
 * Start the application.
 */

const child_process = require("child_process");

function start() {
  const app = child_process.exec("node app.js");
  app.stdout.on("data", (data) => {
    console.log(data);
  });
  app.stderr.on("data", (data) => {
    console.error(data);
  });
}

module.exports = start;
