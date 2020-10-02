import React from 'react';
import $ from 'jquery';
import Rating from './Rating.jsx';
import AverageRatings from './AverageRatings.jsx';
import InitialReviews from './InitialReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationRatings: {},
      reviews: []
    };
  }

  componentDidMount() {
    $.get(`http://localhost:1010/reviews/initial/${this.props.locationID}`)
      .done((results) => {
        this.setState({
          locationRatings: results.location[0],
          reviews: results.reviews
        });
      });
  }

  readMore (index) {
    this.state.reviews[index].readMore = true;
    this.setState({reviews: this.state.reviews});
  }

  render () {
    if (this.state.reviews.length === 0) {
      return (
        <div></div>
      );
    }
    return (
      <div>
        <hr></hr>
        <div className="reviewsContainer">
          <Rating ratings={this.state.locationRatings}/>
          <AverageRatings ratings={this.state.locationRatings}/>
          <InitialReviews reviews={this.state.reviews} readMore={this.readMore.bind(this)}/>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default App;