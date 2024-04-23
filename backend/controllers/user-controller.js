const { ioInstance } = require("../socket/socket");

const pingUser = (req, res) => {
  const { name, message } = req.body;
  console.log({ name, message });
  console.log(ioInstance);
  ioInstance.sockets.emit(name, message);
  res.status(200).send({ name, message });
};

module.exports = {
  pingUser,
};
