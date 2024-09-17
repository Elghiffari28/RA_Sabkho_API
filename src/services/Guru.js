import {
  GURU_DATA,
  ADD_GURU,
  UPDATE_GURU,
  DELETE_GURU,
} from "../models/GuruData.js";

const QueryListOfGuru = async () => {
  try {
    const results = await GURU_DATA();
    console.log(results);
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

const serviceUpdateGuru = async (getbodyGuruUpdate, id) => {
  //lakukan validasi

  try {
    const results = await UPDATE_GURU(getbodyGuruUpdate, id);
    return results;
  } catch (error) {
    throw error;
  }
};

const serviceDeleteGuru = async (id) => {
  try {
    const results = await DELETE_GURU(id);
    return results;
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
