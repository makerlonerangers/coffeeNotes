const noteBook = {
  all() {
    return [note, note];
  },
  editNote() {},
  deleteNote() {},
  create() {
    console.log('you made a note');
  },
};

const note = {
  title: 'lone ranger',
  body: "here is the body. It's an ok body, like 3 out of 10. not Jake though.",
  update() {
    this.title = 'a different title';
  },
};
