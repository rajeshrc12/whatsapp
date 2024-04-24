const express = require("express");
const {
  pingUser,
  addUser,
  getAllUsers,
  getUser,
} = require("../controllers/user-controller");
const { sendChat } = require("../controllers/chat-controller");
const routes = express.Router();

// User routes
routes.post("/user", addUser);
routes.get("/users", getAllUsers);
routes.get("/user/:email", getUser);
routes.post("/pinguser", pingUser);

// Chat routes
routes.post("/chat", sendChat);

module.exports = {
  routes,
};
