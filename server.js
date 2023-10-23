import express from 'express';
import dotenv from 'dotenv';
import calculateData from './script.js';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// Start listening on port 3000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// Serve static files (html, css, front end JavaScript) from public folder
app.use(express.static('public'));

app.get('/data', (req, res) => {
  const data = calculateData();
  res.send(data);
});
