import { handleError } from "@/helpers/ErrorHandler";
import type { UserProfileToken } from "@/models/User";
import axios from "axios";

const api = "https://localhost:7224/api/";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(`${api}account/login`, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const registerAPI = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(`${api}account/register`, {
      email: email,
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
