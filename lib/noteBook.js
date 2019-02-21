class NoteBook {
  static create(title, body) {
    this._notes.push(new Note(title, body));
  }
}

NoteBook._notes = [];
