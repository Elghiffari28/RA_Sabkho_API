import { db } from "../config/connect.js";

export const NEWS_DATA = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM news";
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

export const ADD_NEWS = (newsBody, getFileName) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO news (judul, isi, img, tanggal) VALUES (?,?,?,?)";
    db.query(
      sql,
      [newsBody.judul, newsBody.isi, getFileName.filename, newsBody.tanggal],
      (err, results) => {
        if (err) {
          return reject(new Error(err));
        }
        resolve(results);
      }
    );
  });
};

export const DELETE_NEWS = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM news WHERE id = ${id}`;
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
