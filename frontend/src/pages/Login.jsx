import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import WhatsappIcon from "../icons/WhatsappIcon";
import qr from "../images/qr.png";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/user";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../state/user/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="h-screen w-screen">
      <div className="h-[30%] w-full bg-poll-bar-fill-sender"></div>
      <div className="h-[70%] w-full bg-switch-button-color"></div>
      <div className="px-[10vw] fixed top-0 left-0 h-screen w-screen">
        <div className="h-[15%] text-white font-medium flex items-center gap-3">
          <div>
            <WhatsappIcon />
          </div>
          <div>WHATSAPP WEB</div>
        </div>
        <div className="h-[75%] bg-white shadow-2xl rounded flex justify-center items-center">
          <div
            style={{
              backgroundImage: `url(${qr})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="flex justify-center items-center h-[300px] w-[300px]"
          >
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const result = jwtDecode(credentialResponse.credential);
                const user = {
                  email: result.email,
                  name: result.name,
                  profileImageUrl: result.picture,
                };
                localStorage.setItem("user", JSON.stringify(user));
                addUser(user);
                dispatch(setCurrentUser({ ...user, contacts: [] }));
                navigate("/");
              }}
              onError={() => {
                alert("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
