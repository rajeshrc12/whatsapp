import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
const socket = io(import.meta.env.VITE_SERVER_URL, {
  query: {
    email: localStorage.getItem("email"),
  },
});
const App = () => {
  const [chat, setChat] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    socket.on(localStorage.getItem("email"), (data) => {
      setChat(data);
    });
  }, [socket]);
  return (
    <div>
      <div>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>my name is {localStorage.getItem("email")}</div>
      <div>message is {chat}</div>
      <div>
        <button
          onClick={async () => {
            const res = await axios.post(
              `${import.meta.env.VITE_SERVER_URL}/pinguser`,
              {
                name,
                message,
              }
            );
            console.log(res);
          }}
        >
          send
        </button>
      </div>
    </div>
  );
};

export default App;
