import React from 'react';

const ShowAllReviews = ({reviewsAmount, modalView}) => {
  return (
    <div>
      <button className="showAllReviews" onClick={() => { modalView(); }}>Show all {reviewsAmount} reviews</button>
    </div>
  );
};

export default ShowAllReviews;
