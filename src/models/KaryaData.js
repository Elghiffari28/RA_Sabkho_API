import { db } from "../config/connect.js";

const KARYA_DATA = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM karya";
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

const ADD_KARYA = (getDataKaryaBody) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO karya (nama_anak, deskripsi, komentar, bintang, foto) VALUES (?,?,?,?,?)";
    db.query(
      sql,
      [
        getDataKaryaBody.nama_anak,
        getDataKaryaBody.deskripsi,
        getDataKaryaBody.komentar,
        getDataKaryaBody.bintang,
        getDataKaryaBody.foto,
      ],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

export { KARYA_DATA, ADD_KARYA };
