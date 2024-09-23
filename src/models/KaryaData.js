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

const UPDATE_KARYA = (getDataKaryaBody, id) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE karya SET nama_anak = '${getDataKaryaBody.nama_anak}', deskripsi = '${getDataKaryaBody.deskripsi}', foto = '${getDataKaryaBody.foto}' WHERE id = ${id}`;
    db.query(sql, (err, results) => {
      if (err) {
        return reject(new Error(err));
      }
      resolve(results);
    });
  });
};

const DELETE_KARYA = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM karya WHERE id = ${id}`;
    db.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(results);
    });
  });
};
export { KARYA_DATA, ADD_KARYA, UPDATE_KARYA, DELETE_KARYA };
