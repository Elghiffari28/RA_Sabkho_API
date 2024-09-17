import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "",
  database: process.env.DATABASE || "ra_sabkho",
});

export { db };
