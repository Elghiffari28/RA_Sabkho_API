import express from "express";
import {
  addKarya,
  deleteKarya,
  getAllKarya,
  updateKarya,
} from "../controllers/Karya.js";
import { uploadFotoKarya } from "../config/multer.js";
const routerKarya = express.Router();

routerKarya.get("/all", getAllKarya);
routerKarya.post("/", uploadFotoKarya.single("foto"), addKarya);
routerKarya.put("/:id", updateKarya);
routerKarya.delete("/delete/:id", deleteKarya);

export { routerKarya };
