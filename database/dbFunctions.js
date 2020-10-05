const database = require('./index.js');

const initialRequest = (location, callback) => {
  var locationQuery = `SELECT * FROM reviews_locations
            INNER JOIN reviews_hosts ON location_hostID = host_id AND location_id = ?;`;
  var args = [location];
  var initialResults = {};
  database.db.query(locationQuery, args, (err, results) => {
    if (err) {
      console.log('Could not get location averages.');
      return callback(err, null);
    }
    console.log('Location reviews found.');
    initialResults.location = results;
    var reviewsQuery = `SELECT * FROM reviews
                        INNER JOIN reviews_users ON review_userID = user_id AND review_locationID = ?;`;
    database.db.query(reviewsQuery, args, (err, results) => {
      if (err) {
        console.log('Could not retrive reviews');
        return callback(err, null);
      }
      console.log('Retrieved reviews!');
      initialResults.location[0].totalReviews = results.length;
      initialResults.reviews = results;
      return callback(null, initialResults);
    });
  });
}

module.exports.initialRequest = initialRequest;