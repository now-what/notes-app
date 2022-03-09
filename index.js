const NotesModel = require('./notesModel');
const model = new NotesModel();
// model.addNote('Hi');

console.log('The notes app is running');

console.log(model.getNotes());