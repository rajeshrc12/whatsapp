import React from "react";

const StartIcon = ({ onClick = () => {}, color = "#fff" }) => {
  return (
    <svg
      onClick={onClick}
      viewBox="0 0 24 24"
      height="24"
      width="24"
      preserveAspectRatio="xMidYMid meet"
      className=""
      version="1.1"
      x="0px"
      y="0px"
      enableBackground="new 0 0 24 24"
    >
      <title>star-btn</title>
      <path
        fill={color}
        d="M11.1,16.8l-4.4,3.1C6,20.4,5.2,19.8,5.4,19L7,13.9c0.1-0.3,0-0.7-0.3-0.9L2.4,9.7C1.8,9.3,2.1,8.3,2.9,8.3 l5.4-0.1C8.6,8.2,8.9,8,9,7.6l1.8-5.1c0.2-0.7,1.3-0.7,1.5,0l1.8,5.1c0.1,0.3,0.4,0.5,0.7,0.5l5.4,0.1c0.8,0,1.1,1,0.5,1.4L16.4,13 c-0.3,0.2-0.4,0.5-0.3,0.9l1.6,5.2c0.2,0.7-0.6,1.3-1.2,0.9L12,16.8C11.7,16.6,11.4,16.6,11.1,16.8z"
      ></path>
    </svg>
  );
};

export default StartIcon;
