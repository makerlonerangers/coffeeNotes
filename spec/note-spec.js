describe('Note', () => {
  it('can instruct to create a note', () => {
    let note = new Note();
    expect(note.title != undefined).toEqual(true);
  });
});
