

// (function(exports) {
//   function Note(text) {
//     this._text = text;
//   };
//
//   exports.Note = Note;
// })(this);

// function Note(text) {
//   this._text = text;
// }



var assert = {
  isTrue: function(describe, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error ("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      (console.log(describe))
    }
  }
};


function objectExists() {
  var describe = 'Note object exists!';
  var note = new Note('Hey, I built my own tests');
  assert.isTrue(describe, note._text === 'Hey, I built my own tests');
};

function textMethod() {
  var describe = 'Text method returns a note text';
  var note = new Note('Hey, I built my own tests');
  assert.isTrue(describe, note.text() === 'Hey, I built my own tests');
};


objectExists();
textMethod();
