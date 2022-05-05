const express = require('express');
const { notes } = require('./db/db.json')

const app = express();
const PORT = process.env.PORT || 3001;

// set up express to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use(express.static("public"));

app.get('/api/notes', (req, res) => {
    let results = notes;

    console.log(req.query);

    res.json(results);
});

app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be 

    console.log(req.body);

    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});