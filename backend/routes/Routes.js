const express = require("express");
const { pingUser } = require("../controllers/user-controller");
const routes = express.Router();

routes.post("/pinguser", pingUser);
routes.get("/", (req, res) => {
  res.send("hello");
});

module.exports = {
  routes,
};
