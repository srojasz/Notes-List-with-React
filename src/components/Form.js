import React from 'react';
import Input from './Input';
import Submit from './Submit';

const Form = ({handleNewNote, handleSubmit, value}) => {
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "500px",
    }
    return (
        <form onSubmit={handleSubmit} style={style}>
            <Input handleNewNote={handleNewNote} type="text" name="new-note" element="input" placeholder="Añade una nueva nota" value={value}/>
            <Submit value="Añadir" />            
        </form>
    ) 
};

export default Form;