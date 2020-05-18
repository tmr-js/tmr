const express = require("express");
const handlers = require("./handlers");
const path = require("path");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
handlers.handle(app);

// for tmr static
app.use("/.tmr", express.static(path.join(process.cwd(), ".tmr/browser")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
