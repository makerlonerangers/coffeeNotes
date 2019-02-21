describe('Notebook', () => {
  it('can instruct to create a note', () => {
    expect(NoteBook.create != undefined).toEqual(true);
  });

  it('can create a note', () => {
    NoteBook.create('title', 'body');
    expect(NoteBook._notes[0].title()).toEqual('title');
  });

  it('can return all notes', () => {
    NoteBook.create('C', 'D');
    expect(NoteBook.getAll()[0].title()).toEqual('title');
  });

  it('can delete a note', () => {
    NoteBook.delete('title');
    expect(NoteBook._notes[0].title()).toEqual('C');
  });
});
