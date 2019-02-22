const singleNoteView = (note, index) => {
  return `
  <li class="single_note" id="note-${index}">
  <h3>
    ${note.title()}
  </h3>
  <hr>
  <p>
    ${note.body()}
  </p>
  <button class="update-note" id='${index}'>
  ✎ edit
  </button>
  </li>
`;
};
