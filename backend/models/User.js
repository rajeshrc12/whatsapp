const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profileImageUrl: {
    type: String,
    required: true,
  },
  lastSeen: {
    type: Date,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = {
  user,
};
