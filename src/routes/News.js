import express from "express";
const routerNews = express.Router();
import { addNews, deleteNews, getAllNews } from "../controllers/News.js";
import { uploadFotoNews } from "../config/multer.js";

routerNews.get("/all", getAllNews);
routerNews.post("/add", uploadFotoNews.single("img"), addNews);
routerNews.delete("/delete/:id", deleteNews);

export { routerNews };
