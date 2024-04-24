import React from "react";
import ChatWindow from "./ChatWindow";
import FilePreview from "./FilePreview";
import EmptyProfileIcon from "../../icons/EmptyProfileIcon";
import WhatsaAppBG from "../../images/whatsapp.png";
import { useSelector } from "react-redux";
import { getTimeInAmPM } from "../../utils/common";
const MiddlePanel = () => {
  const panel = useSelector((state) => state.panel);
  const user = useSelector((state) => state.user);
  return (
    <div className="h-full" style={{ backgroundImage: `url(${WhatsaAppBG})` }}>
      <div className="h-[10%] bg-panel-header-background">
        <div className="flex gap-3 items-center h-full p-3">
          <div>
            {user.currentUser.profileImageUrl ? (
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={user.selectedUser.profileImageUrl} />
                </div>
              </div>
            ) : (
              <EmptyProfileIcon />
            )}
          </div>
          <div className="flex flex-col">
            <div>{user.selectedUser.name}</div>
            <div className="text-sm text-input-border">
              {user.selectedUser.lastSeen === "online"
                ? user.selectedUser.lastSeen
                : getTimeInAmPM(user.selectedUser.lastSeen)}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[90%]">
        {panel.middle ? <FilePreview /> : <ChatWindow />}
      </div>
    </div>
  );
};

export default MiddlePanel;
