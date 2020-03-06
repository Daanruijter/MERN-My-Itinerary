import React, { Component } from "react";
import { MdFavorite } from "react-icons/md";
import "../CSS/FavouriteIcon.css";
import { connect } from "react-redux";
import { postFavourites } from "../store/actions/favouriteActions";

class FavouriteIcon extends Component {
  state = {
    itineraryFavourite: false
  };

  makeFavourite(e) {
    // e.persist();

    //id of the itinerary//
    let itineraryId = this.props.id;

    //title of the itinerary//
    let itineraryTitle = this.props.title;

    //currentUser-id//
    let currentUserId = this.props.state.auth.currentUser._id;

    //currentUser-name//
    let currentUserName =
      this.props.state.auth.currentUser.firstName +
      "" +
      this.props.state.auth.currentUser.lastName;

    //create an object with the data//
    let favouriteData = {
      itineraryId,
      itineraryTitle,
      currentUserId,
      currentUserName
    };

    console.log("favourite clicked");

    this.props.postFavourites(favouriteData);
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

const mapDispatchToProps = dispatch => {
  return {
    postFavourites: favouriteData => dispatch(postFavourites(favouriteData))
  };
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteIcon);

// onClick={this.props.click()}
