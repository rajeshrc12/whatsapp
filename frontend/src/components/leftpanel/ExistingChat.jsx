import React from "react";
import NewChatIcon from "../../icons/NewChatIcon";
import MenuIcon from "../../icons/MenuIcon";
import ExistingChatContact from "./ExistingChatContact";
import { useDispatch } from "react-redux";
import { left } from "../../state/panel/panelSlice";
const ExistingChat = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-full">
      <div className="h-[17%] border-b-[1px] flex flex-col justify-between">
        <div className="flex justify-between px-5 items-center h-full">
          <div className="text-xl font-bold">Chats</div>
          <div className="flex gap-5">
            <div>
              <NewChatIcon
                onClick={() => {
                  dispatch(left("newChat"));
                }}
              />
            </div>
            <div>
              <MenuIcon />
            </div>
          </div>
        </div>
        <div className="w-full p-2">
          <input
            placeholder="Search"
            type="text"
            className="bg-panel-header-background w-full rounded-lg p-1 outline-none"
          />
        </div>
      </div>
      <div className="h-[83%] overflow-y-scroll">
        <ExistingChatContact />
      </div>
    </div>
  );
};

export default ExistingChat;
