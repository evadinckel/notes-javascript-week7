function returnHTMLText() {
  var noteList = new NoteList();
  noteList.addNote("My notes");
  var noteView = new NoteListView(noteList);
  console.log(noteView.returnHTMLText())
  assert.isTrue("return HTML test", noteView.returnHTMLText() == "<ul><li><div>My notes</div></li></ul>");


};

returnHTMLText();


function returnHTMLTextNoNote(){
  var noteList = new NoteList();
  var noteView = new NoteListView(noteList);
  assert.isTrue("return HTML test with no notes", noteView.returnHTMLText() == "<ul></ul>");

};

returnHTMLTextNoNote();

function returnHTMLTextMultiple(){
  var noteList = new NoteList();
  noteList.addNote("Note 1");
  noteList.addNote("Note 2");
  var noteView = new NoteListView(noteList);
  assert.isTrue("return HTMl test with multiple notes", noteView.returnHTMLText() == "<ul><li><div>Note 1</div></li><li><div>Note 2</div></li></ul>")

};


returnHTMLTextMultiple();
