class NoteBook {
  static create(title, body) {
    this._notes.push(new Note(title, body));
  }
  static getAll() {
    return this._notes;
  }
}

NoteBook._notes = [];
