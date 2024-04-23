import React from "react";

const BackIcon = ({ onClick = () => {}, className = "fill-white" }) => {
  return (
    <svg
      onClick={onClick}
      viewBox="0 0 24 24"
      height="24"
      width="24"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      version="1.1"
      x="0px"
      y="0px"
      enableBackground="new 0 0 24 24"
    >
      <title>back</title>
      <path d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
    </svg>
  );
};

export default BackIcon;
