const path = require("path");
const { app, server, express } = require("./socket/socket");
const { routes } = require("./routes/Routes");

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "prod") {
  app.use(express.static(path.join(path.resolve(), "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(path.resolve(), "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api is running");
  });
}
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use("/", routes);
