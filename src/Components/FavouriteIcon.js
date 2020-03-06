import React, { Component } from "react";
import { MdFavorite } from "react-icons/md";
import "../CSS/FavouriteIcon.css";
import { connect } from "react-redux";

class FavouriteIcon extends Component {
  state = {
    itineraryFavourite: false
  };

  makeFavourite(e) {
    // e.persist();
    console.log(this.props.id);
    console.log(this.props.title);

    console.log("favourite clicked");
    this.setState({ itineraryFavourite: !this.state.itineraryFavourite });

    //   change color into white or red
  }

  update(e, space, txt) {
    console.log(e.target, space, txt);
  }
  render() {
    return (
      <div onClick={e => this.makeFavourite(e)}>
        {this.state.itineraryFavourite ? (
          <div>
            <MdFavorite
              size={36}
              className="itinerary-favourite-icon itinerary-favourite-icon-red"
            />
          </div>
        ) : (
          <div>
            <MdFavorite size={36} className="itinerary-favourite-icon-white" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, null)(FavouriteIcon);

// onClick={this.props.click()}
