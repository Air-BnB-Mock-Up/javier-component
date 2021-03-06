const express = require('express');
const path = require('path');
const db = require('../database/dbFunctions.js');

const app = express();
app.use('/reviews/:locationId', express.static(__dirname + '/../client/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/reviews/initial/:locationID', (req, res) => {
  if (req.params.locationID > 100 || req.params.locationID < 1) {
    return res.status(404).send();
  }
  db.initialRequest(req.params.locationID, (err, results) => {
    if (err) {
      return res.status(404).send();
    }
    if (results.reviews.length === 0) {
      return res.status(404).send();
    }
    return res.status(200).send(results);
  });
})

app.listen(1010, () => {
  console.log("...listening on port 1010")
})