import React, { Component } from "react";
import { MdFavorite } from "react-icons/md";
import "../CSS/FavouriteIcon.css";
import { connect } from "react-redux";
import { postFavourites } from "../store/actions/favouriteActions";
import { deleteFavourites } from "../store/actions/favouriteActions";
import { fetchFavourites } from "../store/actions/favouriteActions";

// let favouritesArray = [];
class FavouriteIcon extends Component {
  state = {
    itineraryFavourite: false
    // itineraryFavouriteBackend: false
  };

  //dispatch an action that does this//

  componentDidMount() {
    let currentUserIdToFetch = this.props.state.auth.currentUser._id;
    this.props.fetchFavourites(currentUserIdToFetch);
  }

  makeFavourite(e) {
    // e.persist();

    //id of the itinerary//
    let isAuthenticated = this.props.state.auth.isAuthenticated;

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
      currentUserName,
      isAuthenticated
    };

    // favouritesArray.push(favouriteData);
    // console.log(favouritesArray);

    // if (this.props.state.auth.isAuthenticated === false) {
    //   favouritesArray = [];
    // }

    console.log("favourite clicked");
    let currentUserIdToFetch = this.props.state.auth.currentUser._id;

    this.setState(
      { itineraryFavourite: !this.state.itineraryFavourite },
      () => {
        console.log(this.state.itineraryFavourite);
        if (this.state.itineraryFavourite === true) {
          console.log("istrue");
          this.props.postFavourites(favouriteData);
        }
        if (this.state.itineraryFavourite === false) {
          console.log("isfalse");
          this.props.deleteFavourites(favouriteData);
        }
      }
    );

    // if (this.props.state.auth.isAuthenticated === false)
    //   this.setState({ itineraryFavourite: false });

    // console.log(this.state.itineraryFavourite);

    // let that = this;
    // setTimeout(function() {
    //   console.log(that.state);

    //   // let test = that.state.itineraryFavourite;
    //   // console.log(test);
    //   if (that.state.itineraryFavourite === true) {
    //     console.log("istrue");
    //     that.props.postFavourites(favouriteData);
    //   }
    //   if (that.state.itineraryFavourite === false) {
    //     console.log("isfalse");
    //   }
    // }, 1000);

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
    postFavourites: favouriteData => dispatch(postFavourites(favouriteData)),
    deleteFavourites: favouriteData =>
      dispatch(deleteFavourites(favouriteData)),
    fetchFavourites: favouriteData => dispatch(fetchFavourites(favouriteData))
  };
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteIcon);

// onClick={this.props.click()}
