var assert = {
  isTrue: function(describe, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error ("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      (console.log(describe))
    }
  }
};
