import React from 'react';

const Note = ({note, handleDeleteNote}) => {
    const {id, title } = note;
    const contentStyle = {
        height: "30px",
        marginBottom: "10px",
        textTransform: "capitalize",
        padding: "5px",       
        marginRight: "5px",
        display: "flex",
        alignItems: "center"
    }

    const noteContainerStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"

    }

    const actionStyles = {
        fontSize: "12px",
        textDecoration: "underline",
        fontWeigh: "700",
        marginRight: "10px",
        cursor: "pointer"
    }


return (
    <section style={noteContainerStyles}>
        <div id={id} style={contentStyle}>
            {title}
        </div>
        <p id={id} style={actionStyles} onClick={handleDeleteNote}>Borrar</p>
    </section>
      
)

}

export default Note;