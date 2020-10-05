import React from 'react';

const AverageRatings = ({ratings, modal}) => {
  return (
    <div className={`AverageRatingsDiv ${modal}`}>
      <div className='AverageRating'>
        <div className="categoryName">
          Cleanliness
        </div>
        <div className="categoryScore">
          <div className="outerbar">
            <span className="innerbar" style={{width: (ratings.location_avgCln/5 * 100)+"%"}}>
            </span>
          </div>
          <span className="ratingNumber">{(ratings.location_avgCln * 1).toFixed(1)}
          </span>
        </div>
      </div>

      <div className='AverageRating'>
        <div className="categoryName">
          Accuracy
        </div>
        <div className="categoryScore">
          <div className="outerbar">
            <span className="innerbar" style={{width: (ratings.location_avgAcc/5 * 100)+"%"}}>
            </span>
          </div>
          <span className="ratingNumber">{(ratings.location_avgAcc * 1).toFixed(1)}
          </span>
        </div>
      </div>

      <div className='AverageRating'>
        <div className="categoryName">
          Communication
        </div>
        <div className="categoryScore">
          <div className="outerbar">
            <span className="innerbar" style={{width: (ratings.location_avgComm/5 * 100)+"%"}}>
            </span>
          </div>
          <span className="ratingNumber">{(ratings.location_avgComm * 1).toFixed(1)}
          </span>
        </div>
      </div>

      <div className='AverageRating'>
        <div className="categoryName">
          Location
        </div>
        <div className="categoryScore">
          <div className="outerbar">
            <span className="innerbar" style={{width: (ratings.location_avgLoc/5 * 100)+"%"}}>
            </span>
          </div>
          <span className="ratingNumber">{(ratings.location_avgLoc * 1).toFixed(1)}
          </span>
        </div>
      </div>

      <div className='AverageRating'>
        <div className="categoryName">
          Check-in
        </div>
        <div className="categoryScore">
          <div className="outerbar">
            <span className="innerbar" style={{width: (ratings.location_avgCheckIn/5 * 100)+"%"}}>
            </span>
          </div>
          <span className="ratingNumber">{(ratings.location_avgCheckIn * 1).toFixed(1)}
          </span>
        </div>
      </div>

      <div className='AverageRating'>
        <div className="categoryName">
          Value
        </div>
        <div className="categoryScore">
          <div className="outerbar">
            <span className="innerbar" style={{width: (ratings.location_avgVal/5 * 100)+"%"}}>
            </span>
          </div>
          <span className="ratingNumber">{(ratings.location_avgVal * 1).toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AverageRatings;
