import axios from "axios";

axios.defaults.baseURL = "https://openlibrary.org";

export const getBooks = async category => {
  const res = await axios.get(`/subjects/${category}.json`);
  return res.data;
};

export const getBookByTitle = async (title) => {
  const res = await axios.get(
    `/search.json?title=${title}`
  );
  return res.data;
};
