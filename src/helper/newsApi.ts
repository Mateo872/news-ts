import { Welcome } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getNews = async () => {
  try {
    const response = await fetch(`${API_URL}${API_KEY}`);
    const news: Welcome = await response.json();
    return news;
  } catch (error) {
    console.log(error);
  }
};
