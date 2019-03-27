const indexContent = `
<div class="container__form_container">
<header>
  <h1>coffeeNotes</h1>
</header>
  <form class="create_form">
    <input
      type="text"
      name="note_title"
      value=""
      placeholder="title"
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
