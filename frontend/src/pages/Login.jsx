import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          localStorage.setItem("email", email);
          navigate("/");
        }}
      >
        login
      </button>
    </div>
  );
};

export default Login;
