const noteBook = new NoteBook();

const renderHome = () => {
  document.querySelector('.container').innerHTML = indexContent;
};

renderHome();
const container = document.querySelector('.container');
const form = document.querySelector('.create_form');
const notesList = document.querySelector('.display_notes');

const displayNotes = () => {
  const notes = NoteBook.getAll();
  document.querySelector('.display_notes').innerHTML = mapOverNotes(notes);
  document
    .querySelector('.display_notes')
    .addEventListener('click', handleUpdateClick);
};

const handleUpdateClick = e => {
  if (e.target.className !== 'update-note') return;
  renderEditPage(e.target.id);
};

const mapOverNotes = notes => {
  return notes
    .map((note, index) => {
      return singleNoteView(note, index);
    })
    .join('');
};

const createNote = e => {
  e.preventDefault();
  const title = form.querySelector('[name=note_title]').value;
  const body = form.querySelector('[name=note_body]').value;
  NoteBook.create(title, body);
  displayNotes();
  form.reset();
};

form.addEventListener('submit', createNote);

displayNotes();
