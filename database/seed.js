const database = require('./index.js');
const faker = require('faker');

for (var i = 1; i < 3001; i++) {
  var sql = `INSERT INTO reviews_users (user_name, user_img)
              VALUES (?, ?);`;

  var args = [`${faker.name.firstName()}`, `${faker.image.avatar()}`];

  database.db.query(sql, args, (err, results) => {
    if (err && i === 3000) {
      console.log('error happened:', err);
    }
    if (i === 3000) {
      console.log('Users table has been seeded!');
    }
  });
}

for (var i = 1; i < 501; i++) {
  var sql = `INSERT INTO reviews_hosts (host_name, host_img)
              VALUES (?, ?);`;

  var args = [`${faker.name.firstName()}`, `${faker.image.avatar()}`];

  database.db.query(sql, args, (err, results) => {
    if (err && i === 500) {
      console.log('error happened:', err);
    }
    if (i === 500) {
      console.log('Hosts table has been seeded!');
    }
  });
}

for (var i = 1; i < 101; i++) {
  var avgCln = (Math.random() * 3) + 2;
  var avgAcc = (Math.random() * 3) + 2;
  var avgComm = (Math.random() * 3) + 2;
  var avgLoc = (Math.random() * 3) + 2;
  var avgCheckIn = (Math.random() * 3) + 2;
  var avgVal = (Math.random() * 3) + 2;
  var totalAvg = (avgCln+avgAcc+avgComm+avgLoc+avgCheckIn+avgVal)/6;
  var hostID = Math.floor((Math.random() * 500) + 1);

  var sql = `INSERT INTO reviews_locations (location_name, location_hostID, location_avg, location_avgCln, location_avgAcc, location_avgComm, location_avgLoc, location_avgCheckIn, location_avgVal)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  var args = [`${faker.address.streetName()}`, hostID, totalAvg, avgCln, avgAcc, avgComm, avgLoc, avgCheckIn, avgVal];

  database.db.query(sql, args, (err, results) => {
    if (err && i === 100) {
      console.log('could not add location', err);
    }
    if (i === 100) {
      console.log('location added successfully');
    }
  });
}

for (var i = 1; i < 5001; i++) {
  var locationID = Math.floor((Math.random() * 100) + 1);
  var userID = Math.floor((Math.random() * 3000) + 1);

  var sql = `INSERT INTO reviews (review_msg, review_locationID, review_userID, review_createdAt)
  VALUES (?, ?, ?, ?);`;

  var args = [`${faker.lorem.sentences()}`, locationID, userID, `${new Date}`];

  database.db.query(sql, args, (err, results) => {
    if (err && i === 5000) {
      console.log('could not add location', err);
    }
    if (i === 5000) {
      console.log('location added successfully');
    }
  });
}
