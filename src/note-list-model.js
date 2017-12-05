(function(exports) {
function NoteList() {
  this._list = [];
};

NoteList.prototype.list = function() {
  return this._list;
};

NoteList.prototype.addNote = function(note) {
return this._list.push(new Note(note));
};

NoteList.prototype.viewNotes = function() {
  for (var note in this._list) {
    return this._list[note];
  }
};


exports.NoteList = NoteList;
})(this);
