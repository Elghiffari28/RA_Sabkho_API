import { GETResponse, POSTResponse, PUTResponse } from "../../response.js";
import { queryListOfKarya, createKarya, putKarya } from "../services/Karya.js";

const getAllKarya = async (req, res) => {
  try {
    const dataKarya = await queryListOfKarya();
    console.log(dataKarya);
    GETResponse(200, dataKarya, "Get all data karya", res);
  } catch (error) {
    throw error;
  }
};

const addKarya = async (req, res) => {
  try {
    const getDataKaryaBody = req.body;
    const results = await createKarya(getDataKaryaBody);
    POSTResponse(
      201,
      getDataKaryaBody,
      results,
      "Data karya berhasil ditambahkan",
      res
    );
  } catch (error) {
    throw new Error(`Error adding karya ${error.message}`);
  }
};

const updateKarya = async (req, res) => {
  try {
    const getDataKaryaBody = req.body;
    const id = req.params.id;
    const results = await putKarya(getDataKaryaBody, id);
    PUTResponse(200, getDataKaryaBody, results, "data berhasil diubah", res);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const deleteKarya = (req, res) => {};

export { getAllKarya, addKarya, updateKarya };
