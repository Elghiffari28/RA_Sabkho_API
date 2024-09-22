import express from "express";
import { addKarya, getAllKarya, updateKarya } from "../controllers/Karya.js";
const routerKarya = express.Router();

routerKarya.get("/all", getAllKarya);
routerKarya.post("/", addKarya);
routerKarya.put("/:id", updateKarya);

export { routerKarya };
