// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Importing the comments.json file
const comments = require('./comments.json');

// Importing the body-parser
const bodyParser = require('body-parser');

// Using body-parser
app.use(bodyParser.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});