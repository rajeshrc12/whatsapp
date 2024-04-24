import React from "react";
import ChatWindow from "./ChatWindow";
import FilePreview from "./FilePreview";
import EmptyProfileIcon from "../../icons/EmptyProfileIcon";

const MiddlePanel = () => {
  return (
    <div className="h-full">
      <div className="h-[10%] bg-panel-header-background">
        <div className="flex gap-3 items-center h-full p-3">
          <div>
            <EmptyProfileIcon />
          </div>
          <div className="flex flex-col">
            <div>Rajesh</div>
            <div className="text-sm text-input-border">last seen today</div>
          </div>
        </div>
      </div>
      <div className="h-[90%]">{true ? <ChatWindow /> : <FilePreview />}</div>
    </div>
  );
};

export default MiddlePanel;
