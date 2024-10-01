import {
  GURU_DATA,
  ADD_GURU,
  UPDATE_GURU,
  DELETE_GURU,
  GURU_DATA_ID,
} from "../models/GuruData.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const QueryListOfGuru = async () => {
  try {
    const results = await GURU_DATA();
    return results;
  } catch (error) {
    console.log(error);
  }
};

const QueryguruById = (id) => {
  let guru;
  QueryListOfGuru.forEach((guruData) => {
    if (guruData == id) {
      guru = guruData;
    }
  });
  return guru;
};

const createGuru = async (getBodyGuruData, getFileName) => {
  // lakukan validasi setiap data nya

  // if (getBodyGuruData.nig == 120) {
  //   console.log("Masukan nama guru");
  // }
  try {
    const lenNig = getBodyGuruData.nig.length;
    if (lenNig !== 10) {
      throw new Error("Panjang NIG kurang dari 10 atau lebih dari 10");
    }
    console.log(lenNig);
    const results = await ADD_GURU(getBodyGuruData, getFileName);
    return results;
  } catch (error) {
    throw error;
  }
};

const serviceUpdateGuru = async (getbodyGuruUpdate, id, getFileName) => {
  try {
    const existingGuru = await GURU_DATA_ID(id);
    if (!existingGuru) {
      throw new Error("Guru tidak ditemukan");
    }

    if (getFileName) {
      if (existingGuru[0].foto) {
        const oldFilePath = path.join(
          __dirname,
          "..",
          "..",
          "public",
          "assets",
          existingGuru[0].foto
        );
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
          console.log("file dihapus");
        } else {
          console.log("file tidak dihapus");
        }
      }
      getbodyGuruUpdate.foto = getFileName;
    }

    return await UPDATE_GURU(getbodyGuruUpdate, id);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// const serviceUpdateGuru = async (getbodyGuruUpdate, id, getFileName) => {
//   //lakukan validasi

//   try {
//     const results = await UPDATE_GURU(getbodyGuruUpdate, id, getFileName);
//     return results;
//   } catch (error) {
//     throw error;
//   }
// };

const serviceDeleteGuru = async (id) => {
  try {
    const existingGuru = await GURU_DATA_ID(id);
    if (!existingGuru || existingGuru.length === 0) {
      throw new Error("Data tidak ditemukan");
    }
    const results = await DELETE_GURU(id);

    if (existingGuru[0].foto) {
      const oldFilePath = path.join(
        __dirname,
        "..", // Naik satu tingkat dari src/services
        "..", // Naik dua tingkat ke root
        "public",
        "assets",
        existingGuru[0].foto // Nama file foto dari database
      );
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
        console.log("foto dihapus");
      } else {
        console.log("file foto tidak terhapus");
      }
    }
    if (!results.affectedRows) {
      throw new Error("Data tidak ada");
    } else {
      return results;
    }
  } catch (error) {
    throw error;
  }
};

export {
  QueryListOfGuru,
  QueryguruById,
  createGuru,
  serviceUpdateGuru,
  serviceDeleteGuru,
};
