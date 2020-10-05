import React from 'react';
import $ from 'jquery';
import Rating from './Rating.jsx';
import AverageRatings from './AverageRatings.jsx';
import InitialReviews from './InitialReviews.jsx';
import ShowAllReviews from './ShowAllReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationRatings: {},
      reviews: [],
      reviewsModal: [],
      modal: 'inactive'
    };
  }

  componentDidMount() {
    $.get(`reviews/initial/${this.props.locationID}`)
      .done((results) => {
        this.setState({
          locationRatings: results.location[0],
          reviews: results.reviews.slice(0, 6),
          reviewsModal: results.reviews
        });
      });
  }

  modalView () {
    if (this.state.modal === 'inactive') {
      return this.setState({modal: 'active'});
    }
    return this.setState({modal: 'inactive'});
  }



  readMore (index) {
    if (this.state.modal === 'active') {
      var newReviewsModals = this.state.reviewsModal;
      newReviewsModals[index].readMore = true;
      return this.setState({reviewsModal: newReviewsModals});
    } else {
      var newReviews = this.state.reviews;
      newReviews[index].readMore = true;
      return this.setState({reviews: newReviews});
    }
  }

  renderView () {
    return (
      <div>
        <div className={`modal ${this.state.modal}`}>
          <div className="modalHeader">
            <button className="modalCloser" onClick={this.modalView.bind(this)}><span className="x">&times;</span></button>
          </div>
          <div className="modalBody">
            <div className="modalBodyLeft">
              <Rating ratings={this.state.locationRatings} modal={this.state.modal}/>
              <AverageRatings ratings={this.state.locationRatings} modal={this.state.modal}/>
            </div>
            <div className="modalBodyRight">
              <InitialReviews reviews = {this.state.reviewsModal} readMore={this.readMore.bind(this)} modal={this.state.modal}/>
            </div>
          </div>
        </div>
        <div onClick={this.modalView.bind(this)}className={`overlay ${this.state.modal}`}></div>
      </div>
    );
  }

  render () {
    if (this.state.reviews.length === 0) {
      return (
        <div></div>
      );
    }
    return (
      <div>
        <hr/>
        <div className="reviewsContainer">
          <Rating ratings={this.state.locationRatings}/>
          <AverageRatings ratings={this.state.locationRatings}/>
          <InitialReviews reviews={this.state.reviews} readMore={this.readMore.bind(this)}/>
          <ShowAllReviews reviewsAmount = {this.state.locationRatings.totalReviews} modalView={this.modalView.bind(this)}/>
          {this.renderView()}
        </div>
        <hr/>
      </div>
    );
  }
}

export default App;
