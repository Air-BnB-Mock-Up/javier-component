import React from 'react';

const Rating = ({ratings}) => {
  return (
    <div className="reviews1">
      <h2 className="ratingReviewNumbers"><span className="star">★</span> {(ratings.location_avg * 1).toFixed(2) + " (" + ratings.totalReviews + " reviews)"} </h2>
    </div>
  );
};

export default Rating;