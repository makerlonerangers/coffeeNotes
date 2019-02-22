const noteBook = new NoteBook();

const renderHome = () => {
  document.querySelector('.container').innerHTML = `<div class="container">
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
          type="text"
          name="note_body"
          value=""
          placeholder="body"
        ></textarea>
        <input type="submit" name="create_note" value="post!" />
      </form>
    </div>
    <div class="display">
      <ul class="display_notes"></ul>
    </div>
    <div class="edit"></div>
  </div>`;
};
renderHome();

const container = document.querySelector('.container');
const form = document.querySelector('.create_form');
const notesList = document.querySelector('.display_notes');

const displayNotes = () => {
  const notes = NoteBook.getAll();
  notesList.innerHTML = notes
    .map((note, index) => {
      return `
    <li class="single_note" id="note-${index}">
      <h3>
        ${note.title()}
      </h3>
      <p>
        ${note.body()}
      </p>
      <button class="update-note">
        Update
      </button>
    </li>
    `;
    })
    .join('');
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

notesList.addEventListener('click', e => {
  if (e.target.className !== 'update-note') return;

  container.innerHTML = `<h1>This is the edit view</h1>`;
});
