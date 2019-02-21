describe('Notebook', () => {
  it('can instruct to create a note', () => {
    expect(NoteBook.create != undefined).toEqual(true);
  });

  it('can create a note', () => {
    NoteBook.create('title goes here', 'body goes here');
    expect(NoteBook._notes[0].title()).toEqual('title goes here');
  });
});
