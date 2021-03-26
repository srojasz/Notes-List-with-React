import { render } from '@testing-library/react';

import Notes from './components/Notes';
import Note from './components/Note';
import Form from './components/Form';
import Input from './components/Input';
import Submit from './components/Submit';


describe("Notes", () => {
  test("renders Notes component", () => {
    const notes = [{userId: 1, id: 1, title: "delectus aut autem", completed: false}, {userId: 1, id: 2, title: "quis ut nam facilis et officia qui", completed: false} ];
    const handleDelete = jest.fn();
    render(
      <Notes handleDelete={handleDelete} notes={notes} />
    );
  });
});

describe("Note", () => {
  test("renders Note component", () => {
    const note = {userId: 1, id: 1, title: "delectus aut autem", completed: false};
    const handleDelete = jest.fn();
    render(
      <Note handleDelete={handleDelete} note={note} />
    );
  });
});

describe("Form", () => {
  test("renders Form component", () => {
    const newNote = {userId: 1, id: 1, title: "delectus aut autem", completed: false};
    const onChange = jest.fn();
    const handleSubmit = jest.fn();
    render(
      <Form value={newNote} onChange={onChange} handleSubmit={handleSubmit} />
    );
  });
});

describe("Input", () => {
  test("renders Input component", () => {
    const onChange = jest.fn();
    const value = "Nueva nota";
    render(
       <Input onChange={onChange} type="text" name="new-note" element="input" placeholder="Añade una nueva nota" value={value}/>
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