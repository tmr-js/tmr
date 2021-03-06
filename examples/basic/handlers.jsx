const tmr = require("@tmr/tmr");
// TODO: We will probably use tmr.createElement instead of the React one.
const React = require("react");
const HelloComponent = require("./HelloComponent");

function handle(app) {
  app.get("/test", (req, res) => {
    const component = (
      <HelloComponent />
    );
    tmr.send({ req, res, component });
  });
}

module.exports = {
  handle,
};
