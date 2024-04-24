import React, { useState } from "react";
import PlusIcon from "../../icons/PlusIcon";
import Chat from "./Chat";
import ChatBox from "./ChatBox";
const ChatWindow = () => {
  const chats = [{ type: "text", message: "hello" }];
  return (
    <div className="h-full">
      <div className="h-[90%] overflow-y-scroll">
        {chats.map((chat, i) => (
          <Chat chat={chat} key={i} />
        ))}
      </div>
      <div className="h-[10%] flex bg-panel-header-background items-center px-2 gap-3">
        <PlusIcon />
        <ChatBox />
      </div>
    </div>
  );
};

export default ChatWindow;
