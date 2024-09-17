import { GETResponse } from "../../response.js";
import { queryListOfNews, serviceAddNews } from "../services/News.js";

const getAllNews = async (req, res) => {
  try {
    const dataNews = await queryListOfNews();
    GETResponse(200, dataNews, "Get all data news", res);
  } catch (error) {
    throw new Error(`Gagal menampilkan data news ${error}`);
  }
};

const addNews = async (req, res) => {
  try {
    const newsBody = req.body;
    const results = await serviceAddNews(newsBody);
  } catch (error) {}
};

export { getAllNews, addNews };
