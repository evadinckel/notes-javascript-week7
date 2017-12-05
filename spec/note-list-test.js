function objectExists() {
  var describe = 'Note-list object exists!';
  var noteList = new NoteList();
  assert.isTrue(describe, noteList instanceof NoteList);
};

objectExists();

function returnsAddedNote() {
  var describe  = "note has been added";
  var noteList = new NoteList();
  noteList.addNote('new note');
  assert.isTrue(describe, noteList.list()[0] instanceof Note);
};

returnsAddedNote();


function displayeachNote() {
  var noteList = new NoteList();
  var describe = 'display each note'
  noteList.addNote('new note');
  assert.isEqual(describe, noteList.viewNotes()._text, 'new note');
};

displayeachNote();
