// const fs = require("fs");
// const path = require('path');
// const util = require('util');
// const express = require('express');
// const app = express();

// // creating promises
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);


// class store {
//     constructor() {
//         this.lastId = 0;
//     };
//     read() {
//         return fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8');
//     };

//     write(note) {
//         return writeFileAsync(path.join(__dirname, "db.json"), JSON.stringify(note));
//     };

//     getNotes() {
//         return this.read().then(notes => {
//             let jsonNotes = JSON.parse(notes);
//             console.log(jsonNotes);
//             return(jsonNotes);
//         });
//     };

//     //creating a new object notes
//     createNote (newNote) {
//         console.log(newNote);
//         return this.getNotes().then(notes => {
//             const createNoteList = [...notes, newNote];
//             console.log(createNoteList);
//             return this.write(newNoteList);
//         })
//     }
// };

// const store = new Store();

// module.exports = store;