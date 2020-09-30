import React from 'react';
import moment from 'moment';

const InitialReviews = (props) => {
  {console.log('these are the reviews', props.reviews)}
  return (
    <div>
      <h1>InitialReviews</h1>
      {props.reviews.map((review) => {
        {var date = moment(review.review_createdAt);}
        return (
          <div key={review.review_id}>
            <h3>REVIEW</h3>
            <img src={review.user_img}></img>
            <p>{review.user_name}</p>
            <p>{moment(date).format('MMMM YYYY')}</p>
            <p>{review.review_msg}</p>
          </div>
        )
      })}
    </div>
  )
}

export default InitialReviews;