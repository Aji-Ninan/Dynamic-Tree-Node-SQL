const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: '<database-user-name>',
  password: '<database-password>',
  database: '<database-name>'
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database');
    return;
  }
  console.log('Connected to the database as id');
});

app.post('/api/posts', (req, res) => {
  const post = req.body;
  const sql = 'INSERT INTO posts SET ?';
  connection.query(sql, post, (error, result) => {
    if (error) {
      console.error('Error saving post');
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

