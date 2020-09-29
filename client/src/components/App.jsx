import React from 'react';
import $ from 'jquery';
import InitialRatings from './InitialRatings.jsx';

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
      this.setState({locationRatings: results.location[0]})
    })
  }

  render () {
    {console.log('okay testing', this.props)}
    return (
      <div>
        <h1>Reviews</h1>
        <InitialRatings ratings={this.state.locationRatings}/>

      </div>
    )
  }
}

export default App;