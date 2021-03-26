import { render } from '@testing-library/react';
import Notes from './components/Notes';
import Note from './components/Note';



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