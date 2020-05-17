function handle(app) {
  app.get("/test", (req, res) => {
    // const component = <div>test</div>;
    const component = "<div>test</div>"
    res.send(component);
  });
}

module.exports = {
  handle,
};
