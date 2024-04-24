import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

export const sendChat = async (chat) => {
  try {
    const response = await axios.post(`${serverUrl}/chat`, chat);
    console.log("src/service/user/(addUser)", response.data);
  } catch (error) {
    console.log("error src/service/user/(addUser)", error);
  }
};
