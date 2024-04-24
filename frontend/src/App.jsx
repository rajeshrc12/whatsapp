import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import SideBar from "./components/sidebar/SideBar";
import LeftPanel from "./components/leftpanel/LeftPanel";
import MiddlePanel from "./components/middlepanel/MiddlePanel";
import { useSelector } from "react-redux";
import { FaLinkedin } from "react-icons/fa";
const App = () => {
  const user = useSelector((state) => state.user);
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
      <div className="w-[65%] border">
        {user.selectedUser.name ? (
          <MiddlePanel />
        ) : (
          <div className="bg-panel-header-background h-full flex justify-center items-center">
            <div className="text-center">
              <div className="text-2xl">WhatsApp Web</div>
              <img
                src="https://static.whatsapp.net/rsrc.php/v3/yX/r/dJq9qKG5lDb.png"
                width="320"
                alt=""
              ></img>
              <div className="flex justify-center gap-1">
                <div>By</div>
                <a
                  className="font-bold flex items-center gap-1"
                  target="_blank"
                  href="https://www.linkedin.com/in/rajeshcharhajari/"
                >
                  <div>Rajesh charhajari</div>
                  <div>
                    <FaLinkedin />
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
