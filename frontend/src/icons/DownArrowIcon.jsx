import React from "react";

const DownArrowIcon = ({ onClick = () => {} }) => {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      viewBox="0 0 18 18"
      height="18"
      width="18"
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      x="0px"
      y="0px"
    >
      <title>down-context</title>
      <path
        className="fill-input-border"
        d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"
      ></path>
    </svg>
  );
};

export default DownArrowIcon;
