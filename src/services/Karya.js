import {
  KARYA_DATA,
  ADD_KARYA,
  UPDATE_KARYA,
  DELETE_KARYA,
} from "../models/KaryaData.js";

const queryListOfKarya = async () => {
  try {
    const results = await KARYA_DATA();
    return results;
  } catch (error) {
    console.log(error);
  }
};

const createKarya = async (getDataKaryaBody, getFileName) => {
  //lakykan validasi

  try {
    const results = await ADD_KARYA(getDataKaryaBody, getFileName);
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

const putKarya = async (getDataKaryaBody, id) => {
  try {
    const results = await UPDATE_KARYA(getDataKaryaBody, id);
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

const serviceDeleteKarya = async (id) => {
  try {
    const results = await DELETE_KARYA(id);
    if (!results.affectedRows) {
      throw new Error("Data tidak ada");
    } else {
      return results;
    }
  } catch (error) {
    throw error;
  }
};

export { queryListOfKarya, createKarya, putKarya, serviceDeleteKarya };
