import { NEWS_DATA } from "../models/NewsData.js";

const queryListOfNews = async () => {
  try {
    const results = await NEWS_DATA();
    return results;
  } catch (error) {
    console.log(error);
  }
};

const serviceAddNews = () => {};

export { queryListOfNews, serviceAddNews };
