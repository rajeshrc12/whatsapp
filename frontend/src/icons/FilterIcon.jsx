import React from "react";
import iconColors from "./colors";

const FilterIcon = ({ onClick = () => {} }) => {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      viewBox="0 0 24 24"
      height="20"
      width="20"
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      x="0px"
      y="0px"
    >
      <title>filter</title>
      <path
        fill={iconColors.panelHeaderIcon}
        d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"
      ></path>
    </svg>
  );
};

export default FilterIcon;
