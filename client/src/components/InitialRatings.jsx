import React from 'react';

const InitialRatings = ({ratings}) => {
  return (
    <div>
      <h1>InitialRatings</h1>
      <h1>⭐ {ratings.location_avg + " (" + ratings.totalReviews + " reviews)"} </h1>
      <p>Cleanliness {(ratings.location_avgCln * 1).toFixed(1)}</p>
      <p>Accuracy {(ratings.location_avgAcc * 1).toFixed(1)}</p>
      <p>Communication {(ratings.location_avgComm * 1).toFixed(1)}</p>
      <p>Location {(ratings.location_avgLoc * 1).toFixed(1)}</p>
      <p>Check-in {(ratings.location_avgCheckIn * 1).toFixed(1)}</p>
      <p>Value {(ratings.location_avgVal * 1).toFixed(1)}</p>
    </div>
  )
}

export default InitialRatings;