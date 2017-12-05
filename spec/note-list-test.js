function objectExists() {
  var describe = 'Note-list object exists!';
  var noteList = new NoteList();
  assert.isTrue(describe, noteList instanceof NoteList);
};

objectExists();
