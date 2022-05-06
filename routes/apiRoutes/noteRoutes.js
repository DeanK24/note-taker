const router = require('express').Router();
const express = require('express');
const path = require('path')
const fs = require("fs");
const notes = require('../../db/db.json');



router.get("/notes", (req, res) => {
    res.json(notes);
});

router.get('/notes', function (res, req) {
    notes
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
        
});

router.post('/notes', function  (req, res) {
    notes
        .addNote(req.body)
        .then((notes) => res.json(notes))
        .catch(err => res.status(500).json(err))
});



// router.get("/api/notes", function (req, res) {
//     fs.readFile("db/db.json", "utf-8", function (err, data) {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       res.json({username: 'oops'});
//     });
//   });

//   router.post("/api/notes", (req, res) => {
//     const createNote = {
//       title: req.body.title,
//       text: req.body.text,
//       id: id,
//     };
//     console.log(typeof notes);
//     notes.push(createNote);
//     const jsonNote = JSON.stringify(notes);
//     res.json(notes);
//     fs.writeFile("db/db.json", jsonNote, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Note was saved to db.json");
//       }
//     });
//   });

  module.exports = router;