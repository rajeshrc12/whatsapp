const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  from: { type: String, required: true },
  to: { type: String, required: true },
  type: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const userChatSchema = new mongoose.Schema({
  users: [{ type: String, required: true }],
  chats: [chatSchema],
});

const Chat = mongoose.model("chats", userChatSchema);

module.exports = { Chat };
