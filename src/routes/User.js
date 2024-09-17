import express from "express";
const routerUser = express.Router();

import { GetAllUser, GetUser } from "../controllers/User.js";

routerUser.get("/all", GetAllUser);
routerUser.get("/byid/:id", GetUser);

export { routerUser };
