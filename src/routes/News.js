import express from "express";
const routerNews = express.Router();
import { addNews, getAllNews } from "../controllers/News.js";

routerNews.get("/all", getAllNews);
routerNews.get("/add", addNews);

export { routerNews };
