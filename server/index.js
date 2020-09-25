const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/reviews', (req, res) => {
  res.status(200).send();
})

app.listen(1010, () => {
  console.log("...listening on port 1010")
})