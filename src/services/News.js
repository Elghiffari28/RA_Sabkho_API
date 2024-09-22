import { DELETEResponse } from "../../response.js";
import { DELETE_GURU } from "../models/GuruData.js";
import { ADD_NEWS, NEWS_DATA, DELETE_NEWS } from "../models/NewsData.js";

const queryListOfNews = async () => {
  try {
    const results = await NEWS_DATA();
    return results;
  } catch (error) {
    throw error;
  }
};

const serviceAddNews = async (newsBody) => {
  try {
    const results = await ADD_NEWS(newsBody);
    return results;
  } catch (error) {
    throw error;
  }
};
const serviceDeleteNews = async (id) => {
  try {
    const results = await DELETE_NEWS(id);
    if (!results.affectedRows) {
      throw new Error("Data tidak ada");
    } else {
      return results;
    }
  } catch (error) {
    throw error;
  }
};

export { queryListOfNews, serviceAddNews, serviceDeleteNews };
