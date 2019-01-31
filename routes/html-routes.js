module.exports = (app) => {
  // require routes here
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/src/pages/Landing"))
  })
  app.get("/charsheet", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/src/pages/Sheet"))
  })

  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}
