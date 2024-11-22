import {
  DELETEResponse,
  GETResponse,
  POSTResponse,
  PUTResponse,
} from "../../response.js";
import { GURU_DATA, GURU_DATA_ID, ADD_GURU } from "../models/GuruData.js";
import {
  QueryListOfGuru,
  QueryguruById,
  createGuru,
  serviceDeleteGuru,
  serviceUpdateGuru,
} from "../services/Guru.js ";

const getAllGuru = async (req, res) => {
  try {
    const dataGuru = await QueryListOfGuru();
    // console.log(dataGuru);
    GETResponse(200, dataGuru, "Get all data guru", res);
  } catch (error) {
    console.log(error);
  }
};

const getGuruById = async (req, res) => {
  const id = req.params.id;
  try {
    const dataGuruById = await GURU_DATA_ID(id);
    GETResponse(200, dataGuruById, "Get all data guru by id", res);
  } catch (error) {
    console.log(error);
  }
};

const addGuru = async (req, res) => {
  try {
    const getBodyGuruData = req.body;
    const getFileName = req.file;
    // console.log(getFileName);
    const results = await createGuru(getBodyGuruData, getFileName);
    POSTResponse(
      201,
      { payload: getBodyGuruData, foto: getFileName.filename },
      results,
      "Data guru berhasil ditambahkan",
      res
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateGuru = async (req, res) => {
  try {
    const id = req.params.id;
    const getBodyGuruUpdate = req.body;
    const getFileName = req.file ? req.file.filename : null;
    const results = await serviceUpdateGuru(getBodyGuruUpdate, id, getFileName);
    // console.log({ id, getBodyGuruUpdate, getFileName });
    PUTResponse(
      200,
      getBodyGuruUpdate,
      results,
      "Data guru berhasil diubah",
      res
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const deleteGuru = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await serviceDeleteGuru(id);
    // console.log(results);
    DELETEResponse(200, `Data ${id} berhasil dihapus`, res);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getAllGuru, getGuruById, addGuru, updateGuru, deleteGuru };
