import axios from "axios";

export const fetchNotes = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  const notes = data.filter((note) => note.id < 11);
  return notes;
};
