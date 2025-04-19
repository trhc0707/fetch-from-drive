const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/fetch', async (req, res) => {
  const { url } = req.body;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(`Failed to fetch file: ${error.message}`);
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;
