import axios from "axios";

export const fetchNotes = () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then(response => {
            const {data} = response;
            const notes = data.filter((note => note.id < 11));
            return notes;
        })
}