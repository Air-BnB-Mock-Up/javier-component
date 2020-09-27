var mysql = require('mysql');

var db = mysql.createConnection({
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

var database = "AirBnB";
var useDB = `USE ${database}`;

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
    console.log("Currently using AirBnB");
    var reviewsTable = `CREATE TABLE IF NOT EXISTS reviews (
      review_ID INT AUTO_INCREMENT PRIMARY KEY,
      review_MSG TEXT,
      review_CLN INT,
      review_ACC INT,
      review_COMM INT,
      review_LOC INT,
      review_CHECKIN INT,
      review_VAL INT,
      review_LocationID INT,
      review_UserID INT,
      review_CreatedAt DATE
    )`
    db.query(reviewsTable, (err, result) => {
      if (err) {
        throw err;
      }
      console.log('Table reviews has been created!')
    })
  });
});




// db.query("CREAT")