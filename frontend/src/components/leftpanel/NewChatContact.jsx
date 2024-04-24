import React from "react";
import EmptyProfileIcon from "../../icons/EmptyProfileIcon";

const NewChatContact = ({ user }) => {
  return (
    <div className="flex gap-3 items-center p-3">
      {user.profileImageUrl ? (
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={user.profileImageUrl} />
          </div>
        </div>
      ) : (
        <EmptyProfileIcon />
      )}
      <div className="flex flex-col">
        <div>{user.name}</div>
        <div className="text-xs text-input-border">{user.about}</div>
      </div>
    </div>
  );
};

export default NewChatContact;
