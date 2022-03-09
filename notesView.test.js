/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesModel = require ('./notesModel')
const NotesView = require ('./notesView')


describe('notesView', () => {
    it('displays 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html'); 

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('Note one.');
    model.addNote('Note two.');
    
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
    });
});

