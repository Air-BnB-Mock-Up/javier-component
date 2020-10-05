import React from 'react';

const Rating = ({ratings, modal}) => {
  return (
    <div className={`reviews1 ${modal}`}>
      <h2 className={`ratingReviewNumbers ${modal}`}><span className="star">★</span> {(ratings.location_avg * 1).toFixed(2) + ' (' + ratings.totalReviews + ' reviews)'} </h2>
    </div>
  );
};

export default Rating;
