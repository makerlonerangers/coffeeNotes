const noteBook = new NoteBook();

const renderHome = () => {
  document.querySelector('.container').innerHTML = `
    <div class="container__form_container">
      <form class="create_form">
        <input
          type="text"
          name="note_title"
          value=""
          placeholder="Title"
          required
        />
        <textarea
          name="note_body"
          placeholder="body"
        ></textarea>
        <input type="submit" name="create_note" value="post!" />
      </form>
    </div>
    <div class="display">
      <ul class="display_notes"></ul>
    </div>
    <div class="edit"></div>
  `;
};

renderHome();
const container = document.querySelector('.container');
const form = document.querySelector('.create_form');
const notesList = document.querySelector('.display_notes');

const displayNotes = () => {
  const notes = NoteBook.getAll();
  console.log(notesList);

  document.querySelector('.display_notes').innerHTML = notes
    .map((note, index) => {
      return `
  <li class="single_note" id="note-${index}">
    <h3>
      ${note.title()}
    </h3>
    <p>
      ${note.body()}
    </p>
    <button class="update-note" id='${index}'>
      Update
    </button>
  </li>
  `;
    })
    .join('');

  document.querySelector('.display_notes').addEventListener('click', e => {
    if (e.target.className !== 'update-note') return;
    renderEditPage(e.target.id);
  });
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const title = form.querySelector('[name=note_title]').value;
  const body = form.querySelector('[name=note_body]').value;
  const noteObject = NoteBook.create(title, body);
  displayNotes();
  form.reset();
});

displayNotes();

const renderEditPage = id => {
  // const indexofNoteToBeUpdated = NoteBook.getAll[id];
  const noteToBeEdited = NoteBook.getAll()[id];
  const html = `
  <form class="update_form">
  <input
    type="text"
    name="edit_note_title"
    value="${noteToBeEdited.title()}"
    placeholder="Title"
    required
  />
  <textarea
    type="text"
    name="edit_note_body"
    placeholder="body"
  >${noteToBeEdited.body()}</textarea>
  <input type="submit" name="create_note" value="Update!" />
</form>
  `;
  document.querySelector('.container').innerHTML = html;
  const updateForm = document.querySelector('.update_form');
  updateForm.addEventListener('submit', e => {
    e.preventDefault();

    const newTitle = document.querySelector('[name=edit_note_title').value;
    const newBody = document.querySelector('[name=edit_note_body').value;
    NoteBook.update(NoteBook.getAll()[id].title(), newTitle, newBody);
    renderHome();
    displayNotes();
  });
};
