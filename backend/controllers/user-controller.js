const { io } = require("../socket/socket");

const pingUser = (req, res) => {
  const { name, message } = req.body;
  io.sockets.emit(name, message);
  res.status(200).send({ name, message });
};
module.exports = {
  pingUser,
};
