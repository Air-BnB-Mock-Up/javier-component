import React from 'react';
import moment from 'moment';

const InitialReviews = ({reviews, readMore, modal}) => {
  console.log('currently Running Initial Reviews with reviews as:', reviews, modal);
  return (
    <div className={`initialReviewsDiv ${modal}`}>
      {reviews.map((review, index) => {
        var date = moment(review.review_createdAt);
        var testing;
        if (review.review_msg.length > 180 && review.readMore === undefined) {
          if (review.review_msg[179] === ' ') {
            var message = review.review_msg.slice(0, 179) + '... ';
          } else {
            var message = review.review_msg.slice(0, 180) + '... ';
          }
          testing = <button onClick = {(e) => { readMore(index); } }className="readMore">read more</button>;
        } else {
          var message = review.review_msg;
        }

        return (
          <div key={review.review_id} className="initialReview">
            <div className="reviewTopPart">
              <div>
                <img src={review.user_img} className= "avatarImg"></img>
              </div>
              <div className="reviewUser">
                {review.user_name}
                <div className="reviewDate">
                  {moment(date).format('MMMM YYYY')}
                </div>
              </div>
            </div>
            <div className="reviewBottomPart">
              <span className="reviewMsg">
                {message}
              </span>
              {testing}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InitialReviews;
