import React, { useEffect, useState } from "react";
import ChatIcon from "../../icons/ChatIcon";
import EmptyProfileIcon from "../../icons/EmptyProfileIcon";

const SideBar = ({ user }) => {
  return (
    <div className="h-full flex flex-col items-center gap-3 bg-panel-header-background py-5">
      <div className="p-2 rounded-full">
        <ChatIcon />
      </div>
      <div className="p-1 rounded-full">
        {user.currentUser.profileImageUrl ? (
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src={user.currentUser.profileImageUrl} />
            </div>
          </div>
        ) : (
          <EmptyProfileIcon />
        )}
      </div>
    </div>
  );
};

export default SideBar;
