import express from "express";
const routerGuru = express.Router();
import verifyToken from "../middleware/verifyToken.js";
import {
  getAllGuru,
  getGuruById,
  addGuru,
  updateGuru,
  deleteGuru,
} from "../controllers/Guru.js";
import upload from "../config/multer.js";

routerGuru.get("/all", getAllGuru);
routerGuru.get("/byid/:id", getGuruById);
routerGuru.post("/add/", upload.single("foto"), verifyToken, addGuru);
routerGuru.put("/put/:id", updateGuru);
routerGuru.delete("/delete/:id", verifyToken, deleteGuru);

export { routerGuru };
