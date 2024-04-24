import React from "react";

const Chat = ({ chat, currentUserEmail }) => {
  return (
    <div
      className={`flex ${
        chat.from === currentUserEmail ? "justify-end" : "justify-start"
      }`}
    >
      <div className="bg-white rounded-lg shadow px-2 py-1">{chat.message}</div>
    </div>
  );
};

export default Chat;
