import axios from "axios";

export const createNewNote = async ({title, body, userId}) => {
    const {data} = await axios.post(
        "https://jsonplaceholder.typicode.com/todos/",
        {title, body, userId}
    );
    return data;
}

