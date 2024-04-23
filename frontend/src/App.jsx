import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
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
    <div>
      <div className="text-2xl font-bold">{localStorage.getItem("email")}</div>
      <button
        onClick={() => {
          localStorage.removeItem("email");
          navigate("/login");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default App;
