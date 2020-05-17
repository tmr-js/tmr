#!/usr/bin/env node

const start = require("./start");

function printUsage() {
  console.error("Usage: tmr <command>");
}

if (process.argv.length < 3) {
  console.error("Must provide another command line argument.");
  printUsage();
}

const commandMapping = {
  start,
};

const command = process.argv[2];

if (Object.keys(commandMapping).indexOf(command) < 0) {
  console.error(`Command "${command}" not found.`);
  printUsage();
}

process.on("uncaughtException", function (err) {
  console.log("Caught exception: " + err);
});

commandMapping[command]();
