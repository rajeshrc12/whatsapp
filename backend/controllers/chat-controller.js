const { Chat } = require("../models/Chat");
const { io } = require("../socket/socket");

const sendChats = async (req, res) => {
  try {
    let { chat, to, from } = req.body;
    let result = false;
    console.log();
    const existingChat = await Chat.findOne({
      users: { $all: [from, to] },
    });
    if (existingChat) {
      // If a matching chat document exists, update it by pushing the new chat message
      const updatedChat = await Chat.findByIdAndUpdate(
        existingChat._id,
        { $push: { chats: { $each: chat } } },
        { new: true } // Return the updated document
      );
      result = updatedChat;
    } else {
      // If no matching chat document exists, create a new chat document
      const newChat = new Chat({
        users: [from, to],
        chats: chat,
      });
      const savedChat = await newChat.save();
      result = savedChat;
    }
    io.sockets.emit(to, result.chats);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getChats = async (req, res) => {
  try {
    let { from, to } = req.params;
    let chats = [];
    const result = await Chat.findOne({
      users: { $all: [from, to] },
    });
    if (result) {
      chats = result.chats;
    }
    res.status(200).json(chats);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  sendChats,
  getChats,
};
