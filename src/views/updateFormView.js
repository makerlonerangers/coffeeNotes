const updateForm = noteToBeEdited => {
  return `
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
};
