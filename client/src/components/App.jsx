import React from 'react';
import $ from 'jquery';
import InitialRatings from './InitialRatings.jsx';
import InitialReviews from './InitialReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationRatings: {},
      reviews: []
    }
  }


  componentDidMount() {
    $.get(`http://localhost:1010/reviews/initial/${this.props.locationID}`)
      .done((results) => {
        this.setState({
          locationRatings: results.location[0],
          reviews: results.reviews
        })
      })
  }

  render () {
    if (this.state.reviews.length === 0) {
      return (
        <div></div>
      );
    }
    return (
      <div>
        <h1>Reviews</h1>
        <InitialRatings ratings={this.state.locationRatings}/>
        <InitialReviews reviews={this.state.reviews}/>

      </div>
    );
  }
}

export default App;