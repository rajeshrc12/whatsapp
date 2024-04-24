import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendChats } from "../../service/chat";
import { setChats } from "../../state/user/userSlice";
const ChatBox = () => {
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleMessage = async (e) => {
    if (e.key === "Enter" && message.trim()) {
      setMessage("");
      const chats = await sendChats({
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
      dispatch(setChats(chats));
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
