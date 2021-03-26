import { render } from '@testing-library/react';

import Notes from './components/Notes';
import Note from './components/Note';
import Form from './components/Form';
import Input from './components/Input';
import Submit from './components/Submit';


describe("Notes", () => {
  test("renders Notes component", () => {
    const notes = [{userId: 1, id: 1, title: "delectus aut autem", completed: false}, {userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false} ];
    const handleDeleteNote = jest.fn();
    render(
      <Notes handleDeleteNote={handleDeleteNote} notes={notes} />
    );
  });
});

describe("Note", () => {
  test("renders Note component", () => {
    const note = {userId: 1, id: 1, title: "delectus aut autem", completed: false};
    const handleDeleteNote = jest.fn();
    render(
      <Note handleDeleteNote={handleDeleteNote} note={note} />
    );
  });
});

describe("Form", () => {
  test("renders Form component", () => {
    const newNote = {userId: 1, id: 1, title: "delectus aut autem", completed: false};
    const handleNewNote = jest.fn();
    const handleSubmit = jest.fn();
    render(
      <Form value={newNote} handleNewNote={handleNewNote} handleSubmit={handleSubmit} />
    );
  });
});

describe("Input", () => {
  test("renders Input component", () => {
    const handleNewNote = jest.fn();
    const value = "Nueva nota";
    render(
       <Input handleNewNote={handleNewNote} type="text" name="new-note" element="input" placeholder="Añade una nueva nota" value={value}/>
    );
  });
});

describe("Submit", () => {
  test("renders Submit component", () => {
    
    render(
       <Submit />
    );
  });
});