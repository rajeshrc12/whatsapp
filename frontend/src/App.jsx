import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import SideBar from "./components/sidebar/SideBar";
import LeftPanel from "./components/leftpanel/LeftPanel";
import MiddlePanel from "./components/middlepanel/MiddlePanel";
import WhatsaAppBG from "./images/whatsapp.png";
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      const skt = io(import.meta.env.VITE_SERVER_URL, {
        query: {
          email,
        },
      });
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex h-screen w-screen">
      <div className="w-[4%]">
        <SideBar />
      </div>
      <div className="w-[31%] border">
        <LeftPanel />
      </div>
      <div
        className="w-[65%] border"
        style={{ backgroundImage: `url(${WhatsaAppBG})` }}
      >
        <MiddlePanel />
      </div>
    </div>
  );
};

export default App;
