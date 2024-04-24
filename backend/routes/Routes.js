const express = require("express");
const {
  pingUser,
  addUser,
  getAllUsers,
} = require("../controllers/user-controller");
const routes = express.Router();

routes.post("/pinguser", pingUser);
routes.post("/user", addUser);
routes.get("/user", getAllUsers);
routes.get("/", (req, res) => {
  res.send("hello");
});

module.exports = {
  routes,
};
