const express = require('express');
const path = require("path");
const app = express();
const cors = require('cors');
const PORT = 3300;

const today = new Date().toString();

app.use(cors());

app.get('/vote', (req, res) => {
  res.send(`Your vote is accepted: ${today}`);
});

app.get('/books/authors', (req, res) => {
  res.send(fs.readFileSync(`${path.resolve(__dirname)}/module13-task2/books.json`));
});

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});