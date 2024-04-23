import React from "react";

const RightArrowIcon = ({ onClick = () => {}, color = "#fff" }) => {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      viewBox="0 0 30 30"
      height="30"
      width="30"
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      x="0px"
      y="0px"
    >
      <title>chevron-right</title>
      <path
        fill={color}
        d="M11,21.212L17.35,15L11,8.65l1.932-1.932L21.215,15l-8.282,8.282L11,21.212z"
      ></path>
    </svg>
  );
};

export default RightArrowIcon;
