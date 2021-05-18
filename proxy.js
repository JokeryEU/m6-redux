const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/proxy', async (req, res) => {
  const resp = await axios.get('https://jobs.github.com/positions.json');
  res.status(200).json(resp);
  console.log(resp);
});

app.post('/proxy', (req, res) => {
  const { postion, area } = req.body;
  axios.get('');
});

const PORT = 3001 || 5000;
app.listen(PORT, () => console.log('running on port:', PORT));
