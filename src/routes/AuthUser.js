import express from "express";
const routerAuth = express.Router();
import verifyToken from "../middleware/verifyToken.js";
import { getUsers, loginUser, registerUser } from "../controllers/Auth.js";

routerAuth.get("/users", verifyToken, getUsers);
routerAuth.post("/register", registerUser);
routerAuth.post("/login", loginUser);

export { routerAuth };
