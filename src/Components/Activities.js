import React, { Component } from "react";
import Comment from "./Comment";

import "../CSS/Activities.css";
// import {Link} from "react-router-dom";

export default class Activities extends Component {
  openCaroussel = function() {
    this.setState(prevState => ({
      carousselOpen: !prevState.carousselOpen
    }));
  };

  handleClick = () => {
    this.openCaroussel();
  };

  state = {
    carousselOpen: true
  };

  render() {
    let activities = this.props.activities.map(item => (
      <div key={item.id} className="activity-box">
        <a href={item.url}>
          <div className="activities-image">
            <img alt="" src={item.image} />
          </div>
          <div className="activities-title">{item.activity}</div>
        </a>
      </div>
    ));

    return (
      <div className="itinerary-activities-main-container">
        <div className="itinenary-click-here-fore-more-information">
          Click <a href={this.props.itinerary.moreInformation}>here</a> for more
          information
        </div>
        <div
          className="activities-also-nice"
          key={this.props.index}
          matcher={this.props.itinerary._id}
          onClick={() => {
            this.handleClick();
          }}
        >
          ALSO NICE TO DO
        </div>

        {this.state.carousselOpen ? (
          <div className="activities-content">
            <div className="activities-flexer">{activities}</div>
            <Comment itineraryId={this.props.itinerary._id}></Comment>
            <p
              className="activities-close"
              key={this.props.index}
              matcher={this.props.itinerary._id}
              onClick={() => {
                this.handleClick();
              }}
            >
              close
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}
