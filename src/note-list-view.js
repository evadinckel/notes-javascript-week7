(function(exports){
function NoteListView(noteList){
  this._noteList = noteList;
};

NoteListView.prototype.returnHTMLText = function(){
  // return ("<ul><li><div>" + this._noteList._list[0]._text + "</div></li></ul>");

  var fullList = this._noteList._list.map(function(note){
    return ("<li><div>" + note._text + "</div></li>")
  });
   return ("<ul>" + fullList.join("") + "</ul>")
};






exports.NoteListView = NoteListView;
})(this);
