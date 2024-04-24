import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    email: "",
    contacts: [],
    profileImageUrl: "",
    about: "",
    name: "",
  },
  selectedUser: {
    name: "",
    email: "",
    lastSeen: "",
    profileImageUrl: "",
    chats: [],
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setChats: (state, action) => {
      state.selectedUser.chats = action.payload;
    },
  },
});

export const { setCurrentUser, setSelectedUser, setChats } = userSlice.actions;
export default userSlice.reducer;
