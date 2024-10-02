import {
  DELETEResponse,
  GETResponse,
  POSTResponse,
  PUTResponse,
} from "../../response.js";
import {
  queryListOfKarya,
  createKarya,
  putKarya,
  serviceDeleteKarya,
} from "../services/Karya.js";

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
    const getFileName = req.file;
    console.log(getFileName, getDataKaryaBody);
    const results = await createKarya(getDataKaryaBody, getFileName);
    POSTResponse(
      201,
      getDataKaryaBody,
      results,
      "Data karya berhasil ditambahkan",
      res
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
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
const deleteKarya = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await serviceDeleteKarya(id);
    console.log(id);
    DELETEResponse(200, `Karya dengan id ${id} berhasil dihapus`, res);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getAllKarya, addKarya, updateKarya, deleteKarya };
