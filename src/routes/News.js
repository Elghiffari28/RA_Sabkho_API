import express from "express";
const routerNews = express.Router();
import { addNews, deleteNews, getAllNews } from "../controllers/News.js";

routerNews.get("/all", getAllNews);
routerNews.post("/add", addNews);
routerNews.delete("/delete/:id", deleteNews);

export { routerNews };
