const { Chat } = require("../models/Chat");

const sendChat = async (req, res) => {
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
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  sendChat,
};
