import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

export const sendChats = async (chat) => {
  try {
    const response = await axios.post(`${serverUrl}/chat`, chat);
    // console.log("src/service/user/(addUser)", response.data);
    return response.data.chats;
  } catch (error) {
    console.log("error src/service/user/(addUser)", error);
  }
};

export const getChats = async ({ from, to }) => {
  try {
    const response = await axios.get(`${serverUrl}/chat/${from}/${to}`);
    // console.log("src/service/user/(getChats)", response.data);
    return response.data;
  } catch (error) {
    console.log("error src/service/user/(getChats)", error);
  }
};
