import React from "react";
import ExistingChat from "./ExistingChat";
import NewChat from "./NewChat";
import { useSelector } from "react-redux";
const LeftPanel = () => {
  const panel = useSelector((state) => state.panel);
  return panel.left ? <NewChat /> : <ExistingChat />;
};

export default LeftPanel;
