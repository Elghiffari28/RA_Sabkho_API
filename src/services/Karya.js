import { KARYA_DATA, ADD_KARYA } from "../models/KaryaData.js";

const queryListOfKarya = async () => {
  try {
    const results = await KARYA_DATA();
    return results;
  } catch (error) {
    console.log(error);
  }
};

const createKarya = async (getDataKaryaBody) => {
  //lakykan validasi

  try {
    const results = await ADD_KARYA(getDataKaryaBody);
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

export { queryListOfKarya, createKarya };
