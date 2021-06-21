const express = require('express');
const { db } = require('./conf');

const app = express();

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
  const sql = 'SELECT answer_id FROM samplesent';
  const [results] = await db.query(sql);
  res.json(results);
});

app.post('/samplesent', async (req, res) => {
  const { answer_id } = req.body;
  const sql = 'INSERT INTO samplesent answer_id VALUES ?';
  const sqlValues = [answer_id];

  try {
    const [results] = await db.query(sql, sqlValues);
    res.status(201).json(results);
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      // 409: Conflict
      return res.status(409).send('This user already exists!');
    }
    if (err.code === 'ER_BAD_NULL_ERROR') {
      // 422 : Unprocessable Entity
      return res.status(422).send('Please fill all fields!');
    }
    res.status(500).send('Generic error message');
  }
});

app.listen(5050, () => {
  console.log('DB humming man run on http://localhost:5050 !');
});
