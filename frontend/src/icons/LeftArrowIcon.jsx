import React from "react";

const LeftArrowIcon = ({ onClick = () => {} }) => {
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
      <title>chevron-left</title>
      <path
        fill="#fff"
        d="M19.214,21.212L12.865,15l6.35-6.35l-1.933-1.932L9,15l8.282,8.282L19.214,21.212z"
      ></path>
    </svg>
  );
};

export default LeftArrowIcon;
