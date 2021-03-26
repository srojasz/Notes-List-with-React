import {createNewNote} from './createNewNote';

describe("Create a new note", () => {
  test("create a new note", async () => {
    const note = {
        title : "probando",
        body : "probando", 
        userId : 27       
    }

    const result = await createNewNote(note);

    expect(typeof result.id).toBe('number');
    expect(result.title).toEqual("probando");
    expect(result.body).toEqual("probando");
    expect(result.userId).toEqual(27);
  });
});

