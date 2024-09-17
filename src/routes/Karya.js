import express from "express";
import { addKarya, getAllKarya } from "../controllers/Karya.js";
const routerKarya = express.Router();

routerKarya.get("/all", getAllKarya);
routerKarya.post("/", addKarya);

export { routerKarya };
