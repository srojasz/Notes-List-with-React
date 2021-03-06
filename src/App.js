import { useState, useEffect } from "react";

import {fetchNotes} from './services/fetchNotes';
import {createNewNote} from './services/createNewNote';

import Notes from "./components/Notes";
import Form from "./components/Form";
import Loader from "./components/Loader";



function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, addNewNote] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchNotes().then((notes) => {
            setLoading(false);
            setNotes(notes);
        });        
    }, []);

    // Events handlers.
    const onChange = (ev) => {
        ev.preventDefault();
        const newNote = ev.target.value;
        addNewNote(newNote);
    }

    const handleDelete = (ev) => {
        ev.preventDefault();
        const noteClicked = parseInt(ev.target.id);
        if (notes.find((note) => note.id === noteClicked)) {
            const notesAfterDeleted = notes.filter((note) => note.id !== noteClicked);
            setNotes(notesAfterDeleted);
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const newNoteContract = {
            title : newNote,
            body : newNote,
            userId : 27
        }
        
        createNewNote(newNoteContract).then((newNote) => {
            if (newNote.title !== "") {
                setNotes((prevNotes) => prevNotes.concat(newNote));
            } else {
                alert("No puedes dejar este campo vacío");
            }
        }).catch((error) => console.error(error));

        addNewNote("");
    }

    // Styles.
    const style = {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",       
        margin: "100px auto",
        padding: "20px 20px 40px",
        border: "2px solid aquamarine",
        borderRadius: "5px"
    }

  return (
    <div style={style}>
        {notes.length === 0 ? 'Please add a note' : <Notes notes={notes} handleDelete={handleDelete} />}
        <Form value={newNote} onChange={onChange} handleSubmit={handleSubmit} />
        {loading ? <Loader /> : null}
    </div>
  );
}

export default App;
