import axios from "axios";

export const createNewNote = async ({title, body, userId}) => {
    const url = "https://jsonplaceholder.typicode.com/todos/";
    const {data} = await axios.post(
        url,
        {title, body, userId}
    );
    return data;
}

