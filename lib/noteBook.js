class NoteBook {
  static create(title, body) {
    this._notes.push(new Note(title, body));
  }
  static getAll() {
    return this._notes;
  }

  static delete(title) {
    let deleteIndex = this._notes.findIndex(note => note.title() === title);
    this._notes.splice(deleteIndex, 1);
    return 'Note deleted!';
  }
}

NoteBook._notes = [];
