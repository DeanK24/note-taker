const express = require("express");
const { notes } = require("./db/db.json");
const fs = require("fs");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// set up express to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function (req, res) {
  fs.readFile("db/db.json", "utf-8", function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.json(notes);
  });
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

app.post("./api.notes", (req, res) => {
  const createNote = {
    title: req.body.title,
    text: req.body.text,
    id: id,
  };
  console.log(typeof notes);
  notes.push(createNote);
  const jsonNote = JSON.stringify(notes);
  res.json(notes);
  fs.writeFile("db/db.json", jsonNote, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Note was saved to db.json");
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
