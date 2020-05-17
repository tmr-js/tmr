function handle(app) {
  app.get("/test", (req, res) => {
    const component2 = <div>test</div>;
    console.log(component2);
    const component = "<div>test</div>"
    res.send(component);
  });
}

module.exports = {
  handle,
};
