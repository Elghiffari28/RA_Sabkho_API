import { DELETEResponse, GETResponse, POSTResponse } from "../../response.js";
import {
  queryListOfNews,
  serviceAddNews,
  serviceDeleteNews,
} from "../services/News.js";

const getAllNews = async (req, res) => {
  try {
    const dataNews = await queryListOfNews();
    GETResponse(200, dataNews, "Get all data news", res);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addNews = async (req, res) => {
  try {
    const newsBody = req.body;
    const results = await serviceAddNews(newsBody);
    POSTResponse(201, newsBody, results, "Data berhasil ditambahkan", res);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteNews = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await serviceDeleteNews(id);
    console.log(results);
    DELETEResponse(200, `data dengan ${id} berhasil dihapus`, res);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getAllNews, addNews, deleteNews };
