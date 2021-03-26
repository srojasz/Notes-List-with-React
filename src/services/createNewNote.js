import axios from "axios";

export const createNewNote = ({title, body, userId}) => {
    return axios.post("https://jsonplaceholder.typicode.com/todos/", {title, body, userId})
        .then(response => {
            const {data} = response;
            return data;
        }).catch((error) => {
            throw new Error('No hemos podido crear tu nota');
        })
}