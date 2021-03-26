import axios from "axios";

export const fetchNotes = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/";
  const { data } = await axios.get(url);
  const notes = data.filter((note) => note.id < 11);
  return notes;
};
