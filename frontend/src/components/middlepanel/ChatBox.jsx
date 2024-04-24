import React, { useState } from "react";
import { useSelector } from "react-redux";
import { sendChat } from "../../service/chat";
const ChatBox = () => {
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user);
  const handleMessage = async (e) => {
    if (e.key === "Enter" && message.trim()) {
      await sendChat({
        from: user.currentUser.email,
        to: user.selectedUser.email,
        chat: [
          {
            from: user.currentUser.email,
            to: user.selectedUser.email,
            type: "text",
            message,
          },
        ],
      });
    }
  };
  return (
    <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Type a message"
      type="text"
      className="w-full rounded-lg p-2 outline-none"
      onKeyDown={handleMessage}
    />
  );
};

export default ChatBox;
