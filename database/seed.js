const database = require('./index.js');
const faker = require('faker');

for (var i = 1; i < 3001; i++) {
  var sql = `INSERT INTO reviews_users (user_id, user_name, user_img)
              VALUES (${i}, "${faker.name.firstName()}", "${faker.image.avatar()}");`;
  database.db.query(sql, (err, results) => {
    if (err && i === 3000) {
      console.log('error happened:', err);
    }
    if (i === 3000) {
      console.log('Users table has been seeded!');
    }
  })
}

for (var i = 1; i < 501; i++) {
  var sql = `INSERT INTO reviews_hosts (host_id, host_name, host_img)
              VALUES (${i}, "${faker.name.firstName()}", "${faker.image.avatar()}");`;
  database.db.query(sql, (err, results) => {
    if (err && i === 500) {
      console.log('error happened:', err);
    }
    if (i === 500) {
      console.log('Hosts table has been seeded!');
    }
  })
}

for (var i = 1; i < 101; i++) {
  var avgCln = Math.floor((Math.random() * 5) + 1);
  var avgAcc = Math.floor((Math.random() * 5) + 1);
  var avgComm = Math.floor((Math.random() * 5) + 1);
  var avgLoc = Math.floor((Math.random() * 5) + 1);
  var avgCheckIn = Math.floor((Math.random() * 5) + 1);
  var avgVal = Math.floor((Math.random() * 5) + 1);
  var totalAvg = (avgCln+avgAcc+avgComm+avgLoc+avgCheckIn+avgVal)/6
  var hostID = Math.floor((Math.random() * 500) + 1);

  var sql = `INSERT INTO reviews_locations (location_id, location_name, location_hostID, location_avg, location_avgCln, location_avgAcc, location_avgComm, location_avgLoc, location_avgCheckIn, location_avgVal)
  VALUES (${i} , "${faker.address.streetName()}", ${hostID}, ${totalAvg}, ${avgCln}, ${avgAcc}, ${avgComm}, ${avgLoc}, ${avgCheckIn}, ${avgVal});`;

  database.db.query(sql, (err, results) => {
    if (err && i === 100) {
      console.log('could not add location', err);
    }
    if (i === 100) {
      console.log('location added successfully');
    }
  })
}

for (var i = 1; i < 101; i++) {
  var avgCln = Math.floor((Math.random() * 5) + 1);
  var avgAcc = Math.floor((Math.random() * 5) + 1);
  var avgComm = Math.floor((Math.random() * 5) + 1);
  var avgLoc = Math.floor((Math.random() * 5) + 1);
  var avgCheckIn = Math.floor((Math.random() * 5) + 1);
  var avgVal = Math.floor((Math.random() * 5) + 1);
  var totalAvg = (avgCln+avgAcc+avgComm+avgLoc+avgCheckIn+avgVal)/6
  var hostID = Math.floor((Math.random() * 500) + 1);

  var sql = `INSERT INTO reviews_locations (location_id, location_name, location_hostID, location_avg, location_avgCln, location_avgAcc, location_avgComm, location_avgLoc, location_avgCheckIn, location_avgVal)
  VALUES (${i} , "${faker.address.streetName()}", ${hostID}, ${totalAvg}, ${avgCln}, ${avgAcc}, ${avgComm}, ${avgLoc}, ${avgCheckIn}, ${avgVal});`;

  database.db.query(sql, (err, results) => {
    if (err && i === 100) {
      console.log('could not add location', err);
    }
    if (i === 100) {
      console.log('location added successfully');
    }
  })
}

for (var i = 0; i < 5001; i++) {

  var locationID = Math.floor((Math.random() * 100) + 1);
  var userID = Math.floor((Math.random() * 3000) + 1);

  var sql = `INSERT INTO reviews (review_id, review_msg, review_locationID, review_userID, review_createdAt)
  VALUES (${i} , "${faker.lorem.sentences()}", ${locationID}, ${userID}, "${new Date}");`;

  database.db.query(sql, (err, results) => {
    if (err && i === 5000) {
      console.log('could not add location', err);
    }
    if (i === 5000) {
      console.log('location added successfully');
    }
  })

}
