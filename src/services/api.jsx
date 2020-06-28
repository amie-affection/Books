import axios from "axios";

export const getBooks = async () => {
  const res = await axios.get("http://openlibrary.org/subjects/love.json");
  return res.data;
};
