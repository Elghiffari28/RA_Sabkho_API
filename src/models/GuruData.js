import { db } from "../config/connect.js";

const GURU_DATA = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM guru";
    db.query(sql, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

const GURU_DATA_ID = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM guru WHERE id=${id}`;
    db.query(sql, (err, results) => {
      if (err) {
        // console.log(err.sqlMessage);
        return reject(err);
      }
      resolve(results);
    });
  });
};

const ADD_GURU = (getBodyGuruData, getFileName) => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO guru (nig, nama_guru, tempat_lahir, tanggal_lahir, gender, agama, jabatan, nohp, alamat, foto, tahun_masuk) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    db.query(
      sql,
      [
        getBodyGuruData.nig,
        getBodyGuruData.nama_guru,
        getBodyGuruData.tempat_lahir,
        getBodyGuruData.tanggal_lahir,
        getBodyGuruData.gender,
        getBodyGuruData.agama,
        getBodyGuruData.jabatan,
        getBodyGuruData.nohp,
        getBodyGuruData.alamat,
        getFileName.filename,
        getBodyGuruData.tahun_masuk,
      ],
      (err, results) => {
        if (err) {
          // throw new Error(err.sqlMessage);
          return reject(new Error(err));
        }
        resolve(results);
      }
    );
  });
};

const UPDATE_GURU = (getBodyGuruUpdate, id) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE guru SET nama_guru = '${getBodyGuruUpdate.nama_guru}', tempat_lahir = '${getBodyGuruUpdate.tempat_lahir}', tanggal_lahir = '${getBodyGuruUpdate.tanggal_lahir}', gender = '${getBodyGuruUpdate.gender}', agama = '${getBodyGuruUpdate.agama}', jabatan= '${getBodyGuruUpdate.jabatan}', nohp= '${getBodyGuruUpdate.nohp}', alamat = '${getBodyGuruUpdate.alamat}', foto = '${getBodyGuruUpdate.foto}' WHERE id = ${id}`;
    // console.log(sql);
    db.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        return reject(new Error(err));
      }
      resolve(results);
    });
  });
};

const DELETE_GURU = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM guru WHERE id = ${id}`;
    db.query(sql, (err, results) => {
      if (err) {
        return reject(new Error(err));
      }
      resolve(results);
    });
  });
};
export { GURU_DATA, GURU_DATA_ID, ADD_GURU, UPDATE_GURU, DELETE_GURU };
