import axios from "axios";
import type { CompanySearch } from "./company";

export interface SearchRespone {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_API_KEY}`
    );
    return response.data; // Trả về dữ liệu thực tế
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      return { error: error.message };
    } else {
      console.error("Unexpected error:", error);
      return { error: "An unexpected error has occurred." };
    }
  }
};
