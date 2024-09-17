import { db } from "../config/connect.js";

const DATA_USER = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

const REGISTER_USER = (userBody, hashPassword) => {
  console.log(userBody);
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO users (nama, email, password, confirm_password) VALUES (?,?,?,?)";
    db.query(
      sql,
      [userBody.nama, userBody.email, hashPassword, hashPassword],
      (err, results) => {
        if (err) {
          console.log(err);
          return reject(new Error(err));
        }
        resolve(results);
      }
    );
  });
};

const LOGIN_USER = (userBody) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE email = '${userBody.email}'`;
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      console.log(results);
      resolve(results);
    });
  });
};

const REFRESH_TOKEN = (userId, refreshToken) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE users SET refresh_token = ? WHERE id = ?`;
    db.query(sql, [refreshToken, userId], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

export { DATA_USER, REGISTER_USER, LOGIN_USER, REFRESH_TOKEN };
