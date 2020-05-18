#!/usr/bin/env node

import start from "./start";
import build from "./build";

process.on("uncaughtException", function (err) {
  console.log("Caught exception: " + err);
});

function printUsage() {
  console.error("Usage: tmr <command>");
}

if (process.argv.length < 3) {
  console.error("Must provide another command line argument.");
  printUsage();
}

const CommandMapping = {
  start,
  build,
};

const command = process.argv[2];
const args = process.argv.slice(3);

const commandFunction = (CommandMapping as any)[command];

if (typeof commandFunction === "function") {
  commandFunction(args);
} else {
  console.error(`Command "${command}" not found.`);
  printUsage();
}
