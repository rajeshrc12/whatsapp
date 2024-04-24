import React from "react";
import ChatIcon from "../../icons/ChatIcon";
import EmptyProfileIcon from "../../icons/EmptyProfileIcon";

const SideBar = () => {
  return (
    <div className="h-full flex flex-col items-center gap-3 bg-panel-header-background py-5">
      <div className="bg-transparentLg p-2 rounded-full">
        <ChatIcon />
      </div>
      <div className="bg-transparentLg p-1 rounded-full">
        <EmptyProfileIcon size={"30"} />
      </div>
    </div>
  );
};

export default SideBar;
