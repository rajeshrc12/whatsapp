const express = require("express");
const {
  pingUser,
  addUser,
  getAllUsers,
  getUser,
} = require("../controllers/user-controller");
const routes = express.Router();

routes.post("/pinguser", pingUser);
routes.post("/user", addUser);
routes.get("/users", getAllUsers);
routes.get("/user/:email", getUser);
routes.get("/", (req, res) => {
  res.send("hello");
});

module.exports = {
  routes,
};
