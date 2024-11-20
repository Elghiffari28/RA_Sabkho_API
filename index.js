import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
// dotenv.config();
// import * as path from "path";
import { routerAuth } from "./src/routes/AuthUser.js";
import { routerUser } from "./src/routes/User.js";
import { routerGuru } from "./src/routes/Guru.js";
import { routerKarya } from "./src/routes/Karya.js";
import { routerNews } from "./src/routes/News.js";

const app = express();
const port = process.env.PORT;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app settings
app.use(express.json());
app.use(express({ urlencoded: true }));
app.use(cookieParser());
app.use(cors());
app.use(limiter);
app.use(helmet());
app.use("/images", express.static(path.join(__dirname, "public/assets/")));
// app.set("view engine", "ejs");
// app.set("views", path.resolve("./src/views"));

// url handling
app.use("/", routerAuth);
app.use("/user", routerUser);
app.use("/guru", routerGuru);
app.use("/karya", routerKarya);
app.use("/news", routerNews);

app.listen(port, () => {
  console.log(`server berjalan di ${port}`);
  console.log(process.env.PORT);
});
