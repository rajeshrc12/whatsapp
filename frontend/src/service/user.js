import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

export const addUser = async ({ email, name, profileImageUrl }) => {
  try {
    const response = await axios.post(`${serverUrl}/user`, {
      email,
      name,
      profileImageUrl,
    });
    // console.log("src/service/user/(addUser)", response);
  } catch (error) {
    console.log("error src/service/user/(addUser)", error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${serverUrl}/users`);
    // console.log("src/service/user/(getAllUsers)", response.data);
    return response.data;
  } catch (error) {
    console.log("error src/service/user/(getAllUsers)", error);
  }
};

export const getUser = async ({ email }) => {
  try {
    const response = await axios.get(`${serverUrl}/user/${email}`);
    // console.log("src/service/user/(getUser)", response.data);
    return response.data;
  } catch (error) {
    console.log("error src/service/user/(getUser)", error);
  }
};
