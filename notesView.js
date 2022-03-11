class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');
        this.inputEl = document.querySelector('#note-input');
        this.buttonEl = document.querySelector('#add-note-button');
        this.buttonEl.addEventListener('click', () => {
            this.model.addNote(this.inputEl.value);
            this.inputEl.value = '';
            this.displayNotes();
         });
    }

displayNotes() {
    const oldNoteEl = document.querySelectorAll('div.note');
    oldNoteEl.forEach(oldnote => {
        oldnote.remove();
    });

    const notes = this.model.getNotes()

    notes.forEach(note => {
        const noteEl = document.createElement('div');
        noteEl.className = 'note';
        noteEl.innerText = note;
        this.mainContainerEl.append(noteEl);
    })
    }
}

module.exports = NotesView;
