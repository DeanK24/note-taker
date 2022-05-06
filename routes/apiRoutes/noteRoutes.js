// const router = require('express').Router();
// const path = require('path');
// const notes = require('../../db/db.json');

// router.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "../../public/notes.html"));
// });

// router.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "../../public/index.html"));
//   });

// router.get("/notes", (req, res) => {
//     res.json(notes);
// });

// router.get('/notes', function (res, req) {
//     notes
//         .getNotes()
//         .then(notes => res.json(notes))
//         .catch(err => res.status(500).json(err))
        
// });

// router.post('/notes', function  (req, res) {
//     notes
//         .addNote(req.body)
//         .then((notes) => res.json(notes))
//         .catch(err => res.status(500).json(err))
// });

//   module.exports = router;