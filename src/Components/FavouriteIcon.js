import React, { Component } from "react";
import { MdFavorite } from "react-icons/md";

export default class FavouriteIcon extends Component {
  makeFavourite(e) {
    console.log(e);
    console.log("favourite clicked");
  }
  render() {
    return (
      <div
        onClick={e => {
          this.makeFavourite(e);
        }}
      >
        <MdFavorite size={36} className="itinerary-favourite-icon" />;
      </div>
    );
  }
}

// onClick={this.props.click()}
