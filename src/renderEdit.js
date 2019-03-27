const renderEditPage = id => {
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

  const updateNote = e => {
    console.log('1');
    e.preventDefault();
    const newTitle = document.querySelector('[name=edit_note_title').value;
    const newBody = document.querySelector('[name=edit_note_body').value;
    NoteBook.update(NoteBook.getAll()[id].title(), newTitle, newBody);
    renderHome();
    displayNotes();
  };

  document.querySelector('.container').innerHTML = html;
  const updateForm = document.querySelector('.update_form');
  updateForm.addEventListener('submit', updateNote);
};
