const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cookies123"
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});

const database = "AirBnB";
const useDB = `USE ${database}`;

db.query(`CREATE DATABASE IF NOT EXISTS ${database}`, (err, result) => {
  if (err) {
    throw err;
  }
  console.log("AirBnB database created!");
  db.query(useDB, (err, result) => {
    if (err) {
      console.log('cannot use');
      throw err;
    }
    console.log("Currently using AirBnB database!");

    const usersTable = `CREATE TABLE IF NOT EXISTS reviews_users (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      user_name VARCHAR(255),
      user_img INT
    )`
    db.query(usersTable, (err, result) => {
      if (err) {
        throw err;
      }
      console.log('Users table has been created!')
    })

    const hostsTable = `CREATE TABLE IF NOT EXISTS reviews_hosts (
      host_id INT AUTO_INCREMENT PRIMARY KEY,
      host_name VARCHAR(255),
      host_img INT
    )`
    db.query(hostsTable, (err, result) => {
      if (err) {
        throw err;
      }
      console.log('Hosts table has been created!')
    })

    const locationsTable = `CREATE TABLE IF NOT EXISTS reviews_locations (
      location_id INT AUTO_INCREMENT PRIMARY KEY,
      location_name VARCHAR(255),
      location_hostID INT,
      location_avg INT,
      location_avgCln INT,
      location_avgAcc INT,
      location_avgComm INT,
      location_avgLoc INT,
      Location_avgCheckIn INT,
      Location_avgVal INT,
      FOREIGN KEY (location_hostID)
        REFERENCES reviews_hosts (host_id)
    )`
    db.query(locationsTable, (err, result) => {
      if (err) {
        throw err;
      }
      console.log('Locations table has been created!')
    })

    const reviewsTable = `CREATE TABLE IF NOT EXISTS reviews (
      review_id INT AUTO_INCREMENT PRIMARY KEY,
      review_msg TEXT,
      review_cln INT,
      review_acc INT,
      review_comm INT,
      review_loc INT,
      review_checkin INT,
      review_val INT,
      review_hostID INT,
      review_locationID INT,
      review_userID INT,
      review_createdAt DATE,
      FOREIGN KEY (review_hostID)
        REFERENCES reviews_hosts (host_id),
      FOREIGN KEY (review_locationID)
        REFERENCES reviews_locations (location_id),
      FOREIGN KEY (review_userID)
        REFERENCES reviews_users (user_id)
    )`
    db.query(reviewsTable, (err, result) => {
      if (err) {
        throw err;
      }
      console.log('Reviews table has been created!')
    })
  });
});

module.exports.db = db;


// db.query("CREAT")