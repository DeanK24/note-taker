const express = require("express");
const PORT = process.env.PORT || 3001;
const fs = require("fs");
// const htmlRoutes = require('./routes/htmlRoutes/index');

const app = express();



// set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use('/api', apiRoutes)
// app.use('/', htmlRoutes);
let notes = require('./db/db.json');

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get('/api/notes', function (req, res) {
  fs.readFile('db/db.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.json(notes)
  });
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

app.post('/api/notes', function (req, res) {
  let randomNumber = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  let id = randomNumber + Date.now();
  let createNote =
  {
    id: id,
    title: req.body.title,
    text: req.body.text
  };
  console.log(typeof notes);
  notes.push(createNote);
  const jsonNote = JSON.stringify(notes);
  res.json(notes);
  fs.writeFile('db/db.json', jsonNote, (err) => {
    if (err) console.log(err);
    else
    {
      console.log('Note was successfully created to db.json!');
    }
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
