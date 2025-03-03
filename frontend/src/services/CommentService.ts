import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";
import type { CommentPost } from "../models/Comment";

const api = "https://localhost:7224/api/comment/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentPost>(api + `${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
