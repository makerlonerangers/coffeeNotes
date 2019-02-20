describe('Note', () => {
  it('can instruct to create a note', () => {
    let note = new Note();
    expect(note.title != undefined).toEqual(true);
  });

  it('can record the title and body of a note', () => {
    let note = new Note('note1', 'body');
    expect(note.title()).toEqual('note1');
    expect(note.body()).toEqual('body');
  });
});
