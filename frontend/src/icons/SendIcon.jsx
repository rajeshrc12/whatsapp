import React from "react";
import iconColors from "./colors";

const SendIcon = ({ onClick = () => {}, color = "fill-white" }) => {
  return (
    <svg
      onClick={onClick}
      viewBox="0 0 24 24"
      height="24"
      width="24"
      preserveAspectRatio="xMidYMid meet"
      className="cursor-pointer"
      version="1.1"
      x="0px"
      y="0px"
      enableBackground="new 0 0 24 24"
    >
      <title>send</title>
      <path
        className={color}
        d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
      ></path>
    </svg>
  );
};

export default SendIcon;
