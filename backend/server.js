const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const { Server } = require("socket.io");
let onlineUsers = [];

require("dotenv").config();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(bodyParser.json());
const port = process.env.PORT;

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
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
const ioInstance = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});
ioInstance.on("connection", (socket) => {
  // console.clear();
  if (!onlineUsers.find((user) => user.email === socket.handshake.query.email))
    onlineUsers.push({
      email: socket.handshake.query.email,
    });
  console.log("Online Users", onlineUsers);
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter(
      (user) => user.email !== socket.handshake.query.email
    );
    console.log("Online Users", onlineUsers);
  });
});
app.use("/pinguser", (req, res) => {
  const { name, message } = req.body;
  console.log({ name, message });
  ioInstance.sockets.emit(name, message);
  res.status(200).send({ name, message });
});
