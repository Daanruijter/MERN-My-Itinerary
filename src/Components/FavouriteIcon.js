import React, { Component } from "react";
import { MdFavorite } from "react-icons/md";
import "../CSS/FavouriteIcon.css";

export default class FavouriteIcon extends Component {
  state = {
    itineraryFavourite: false
  };

  makeFavourite(e) {
    console.log(e);
    console.log("favourite clicked");
    this.setState({ itineraryFavourite: !this.state.itineraryFavourite });

    //   change color into white or red
  }
  render() {
    return (
      <div
        onClick={e => {
          this.makeFavourite(e);
        }}
      >
        {this.state.itineraryFavourite ? (
          <div>
            <MdFavorite
              size={36}
              className="itinerary-favourite-icon itinerary-favourite-icon-white"
            />
          </div>
        ) : (
          <div>
            <MdFavorite size={36} className="itinerary-favourite-icon-red" />
          </div>
        )}
      </div>
    );
  }
}

// onClick={this.props.click()}
