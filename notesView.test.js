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

    it('adds a new note title from user input and displays it', () => {
        document.body.innerHTML = fs.readFileSync('./index.html'); 

        const model = new NotesModel();
        const view = new NotesView(model);

        const inputEl = document.querySelector('#note-input');
        inputEl.value = 'First note';
        console.log(inputEl.value);
        
        const buttonEl = document.querySelector('#add-note-button');
        buttonEl.click();
        view.displayNotes()
        expect(document.querySelectorAll('.note')[0].innerText).toBe('First note');
    })

    describe ('displayNotes', () => {
        it('when called twice, it displays the correct number of notes', () => {
            document.body.innerHTML = fs.readFileSync('./index.html'); 

            const model = new NotesModel();
            const view = new NotesView(model);
            model.addNote('Note one.');
            model.addNote('Note two.');
            view.displayNotes();
            view.displayNotes();
    
            expect(document.querySelectorAll('div.note').length).toBe(2);
        })
    })
});

