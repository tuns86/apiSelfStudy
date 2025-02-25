import axios from "axios";
import type { CompanyProfile, CompanySearch } from "./company";

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

export const getCompanyProfile = async (query: string): Promise<CompanyProfile | null> => {
  try {
    const response = await axios.get<{ data: CompanyProfile[] }>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${import.meta.env.VITE_API_KEY}`
    );

    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data[0]; // ✅ Trả về object CompanyProfile duy nhất
    } else {
      return null; // ✅ Trả về null nếu API không có dữ liệu
    }
  } catch (error: any) {
    console.error("Error fetching company profile:", error.message);
    return null;
  }
};
