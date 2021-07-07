const fs = require('fs');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const express = require('express');
const { db } = require('./conf');

const app = express();
app.use(express.static('sample'));
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.get('/answer', async (req, res) => {
  const sql = 'SELECT title, band FROM answer';
  const [results] = await db.query(sql);
  res.json(results);
});

app.get('/answer/:id', async (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT title, band FROM answer WHERE id=?';
  const sqlValues = [id];
  const [results] = await db.query(sql, sqlValues);
  res.json(results);
});

app.get('/samplesent', async (req, res) => {
  const sql = 'SELECT * FROM samplesent';
  const [results] = await db.query(sql);
  res.json(results);
});

app.get('/samplesent/:id', async (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM samplesent WHERE id=?';
  const sqlValues = [id];
  const [results] = await db.query(sql, sqlValues);
  res.json(results);
});

app.post('/samplesent', async (req, res) => {
  // const { core } = req.files;
  console.log(`${JSON.stringify(req.files.sample.name)}`);

  fs.writeFile(
    `./samples/${req.files.sample.md5}.wav`,
    req.files.sample.data,
    () => {
      console.log('Hey, I waz here!');
    }
  );

  const sql = 'INSERT INTO samplesent (core) VALUES (?)';
  console.log(req.files.sample.name);
  const sqlValues = [req.files.sample.name];
  try {
    const [results] = await db.query(sql, sqlValues);
    res.status(201).json(results);
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      // 409: Conflict
      return res.status(409).send('This sample already exists!');
    }
    if (err.code === 'ER_BAD_NULL_ERROR') {
      // 422 : Unprocessable Entity
      console.log(err);
      return res.status(422).send('Please fill all fields!');
    }
    console.log(err);
    res.status(500).send('Generic error message');
  }
});

app.listen(5050, () => {
  console.log('DB humming man run on http://localhost:5050 !');
});
