import React, { useEffect, useState } from "react";
import BackIcon from "../../icons/BackIcon";
import NewChatContact from "./NewChatContact";
import { useDispatch, useSelector } from "react-redux";
import { left } from "../../state/panel/panelSlice";
import { getAllUsers, getUser } from "../../service/user";
import { setSelectedUser } from "../../state/user/userSlice";
const NewChat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const handleNewChatContact = async (email) => {
    if (user.selectedUser.email !== email) {
      const result = await getUser({ email });
      dispatch(
        setSelectedUser({
          email,
          lastSeen: result.lastSeen,
          profileImageUrl: result.profileImageUrl,
          name: result.name,
          chats: [],
        })
      );
    }
  };
  useEffect(() => {
    if (user.currentUser.email)
      getAllUsers().then((res) =>
        setUsers(res.filter((u) => u.email !== user.currentUser.email))
      );
  }, [user]);
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
        {users.map((user) => (
          <NewChatContact
            key={user._id}
            user={user}
            onClick={handleNewChatContact}
          />
        ))}
      </div>
    </div>
  );
};

export default NewChat;
