class NoteBook {
  static create(title, body) {
    this._notes.push(new Note(title, body));
    NoteBook.saveNotes();
  }
  static getAll() {
    NoteBook.loadNotes();
    return this._notes;
  }

  static delete(title) {
    let deleteIndex = this._notes.findIndex(note => note.title() === title);
    this._notes.splice(deleteIndex, 1);
    NoteBook.saveNotes();
    return 'Note deleted!';
  }

  static update(updateTitle, newTitle, newBody) {
    let updateIndex = this._notes.findIndex(
      note => note.title() === updateTitle
    );
    this._notes[updateIndex]._title = newTitle;
    this._notes[updateIndex]._body = newBody;
    NoteBook.saveNotes();
  }

  static loadNotes() {
    NoteBook._notes = [];
    const notesObj = JSON.parse(localStorage.getItem('notes')) || [];
    for (let i = 0; i < notesObj.length; i++) {
      NoteBook._notes.push(new Note(notesObj[i]._title, notesObj[i]._body));
    }
  }

  static saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this._notes));
  }
}

NoteBook._notes = NoteBook.loadNotes() || [];
