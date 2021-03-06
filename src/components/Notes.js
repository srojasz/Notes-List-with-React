import React, {Fragment} from 'react';
import Note from './Note'

const Notes = ({notes, handleDelete }) => {
    const titleStyle = {
        textAlign : "center",
    };

    const listStyles = {
        paddingInlineStart: "0"
    }
    
return (
    <Fragment>
        <h2 style={titleStyle}>Notas</h2>
        <ul style={listStyles}>
        {notes.map(((note, key) => <Note key={key} note={note} handleDelete={handleDelete} />))}
        </ul>
    </Fragment>
    )

}

export default Notes;