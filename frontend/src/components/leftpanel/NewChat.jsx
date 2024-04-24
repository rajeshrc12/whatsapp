import React from "react";
import BackIcon from "../../icons/BackIcon";
import NewChatContact from "./NewChatContact";
import { useDispatch } from "react-redux";
import { left } from "../../state/panel/panelSlice";
const NewChat = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-full">
      <div className="h-[17%] border-b-[1px] flex flex-col justify-between">
        <div className="flex gap-3 px-5 items-center h-full">
          <div>
            <BackIcon
              className="fill-input-border"
              onClick={() => {
                dispatch(left(""));
              }}
            />
          </div>
          <div className="flex gap-5">New chat</div>
        </div>
        <div className="w-full p-2">
          <input
            placeholder="Search name or email"
            type="text"
            className="bg-panel-header-background w-full rounded-lg p-1 outline-none"
          />
        </div>
      </div>
      <div className="h-[83%] overflow-y-scroll">
        <NewChatContact />
      </div>
    </div>
  );
};

export default NewChat;
