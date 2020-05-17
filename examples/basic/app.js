const express = require("express");
const handlers = require('./handlers');

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
handlers.handle(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
