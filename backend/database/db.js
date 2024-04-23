const mongoose = require("mongoose");

const Connection = async (username, password, uri, dbName) => {
  const URL = `mongodb+srv://${username}:${password}@${uri}/${dbName}`;
  try {
    const conn = await mongoose.connect(URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

module.exports = {
  Connection,
};
