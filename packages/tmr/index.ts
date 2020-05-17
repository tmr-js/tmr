#!/usr/bin/env node

import start from "./start";

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
};

const command = process.argv[2];

const commandFunction = (CommandMapping as any)[command];

if (typeof commandFunction === "function") {
  commandFunction();
} else {
  console.error(`Command "${command}" not found.`);
  printUsage();
}

