import React, { Component } from "react";
import { MdFavorite } from "react-icons/md";
import "../CSS/FavouriteIcon.css";
import { connect } from "react-redux";
import { postFavourites } from "../store/actions/favouriteActions";
import { deleteFavourites } from "../store/actions/favouriteActions";
import { fetchFavourites } from "../store/actions/favouriteActions";

import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

let favBoolean = [];
// let favouritesArray = [];
class FavouriteIcon extends Component {
  state = {
    itineraryFavourite: "unchecked",
    itineraryMongoFavourite: false,
    itineraryId: "",
    favBoolean: "",
    favouritesArray: []
    // itineraryFavouriteBackend: false
  };

  //dispatch an action that does this//

  componentDidMount() {
    //put favouritesArray in localStorage//
    let favouritesArray = this.props.state.favourites.favouritesArray
      .favourites;
    this.setState({ favouritesArray: favouritesArray });

    console.log(favouritesArray);
    localStorage.setItem("favouritesArray", favouritesArray);

    this.getlocalstorage(this.props.id);
    if (localStorage.getItem(this.props.id) === "checked") {
      this.setState({ itineraryFavourite: "checked" });
    }

    this.setState({ test: localStorage.getItem(this.props.id) });

    let itineraryIdFav = localStorage.getItem(this.props.id);
    let itineraryId = this.props.id;

    favBoolean.push({ [itineraryId]: itineraryIdFav });

    this.setState({ favBoolean });
    localStorage.setItem("favBoolean", favBoolean);

    if (this.props.state.auth.isAuthenticated === true) {
      var token = localStorage.getItem("token");

      var decoded = jwt_decode(token);
      let currentUserIdToFetch = decoded.id;

      // let currentUserIdToFetch = this.props.state.auth.currentUser._id;

      this.props.fetchFavourites(currentUserIdToFetch);

      // console.log(this.props.state.favourites.favouritesArray);
      // let favouritesArrayToCompare = this.props.state.favourites.favouritesArray
      //   .favourites;
      // let itineraryIdToCompare = this.props.id;

      // console.log(favouritesArrayToCompare);
      // console.log(itineraryIdToCompare);
      // let itineraryMongoFavourite = favouritesArrayToCompare.includes(
      //   itineraryIdToCompare
      // );
      // let test = !itineraryMongoFavourite;
      // this.setState({
      //   itineraryMongoFavourite: itineraryMongoFavourite
      // });
    }
  }
  loginAlert() {
    alert("Please login to add to favourites");
  }

  getlocalstorage(id) {
    // let refreshId = id;
    // let currentClickedItineraryId = this.props.id;
    // if ((currentClickedItineraryId = refreshId)) {
    // }
    // console.log(localStorage.getItem(itineraryId));
    // return localStorage.getItem(itineraryId);
  }

  makeFavourite(e) {
    // e.persist();

    //id of the itinerary//
    let isAuthenticated = this.props.state.auth.isAuthenticated;

    let itineraryId = this.props.id;
    this.setState({ itineraryId: "" });

    if (this.state.itineraryFavourite === "unchecked") {
      this.setState({ itineraryFavourite: "checked" });
    }
    if (this.state.itineraryFavourite === "checked") {
      this.setState({ itineraryFavourite: "unchecked" });
    }

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

    // let currentUserIdToFetch = this.props.state.auth.currentUser._id;

    // let allFavourites = this.props.state.favourites.favouritesArray.favourites;
    // console.log(allFavourites);

    // let i = 0;
    // for (i = 0; i < allFavourites.length; i++) {
    //   // console.log(this.props.i);
    //   if (this.props.id === allFavourites[i]) {
    //     console.log("make red");
    //     console.log(allFavourites[i]);
    //   }
    // }

    // if (favouritesArrayToCompare !== undefined) {

    if (this.state.itineraryFavourite === "unchecked") {
      localStorage.setItem(itineraryId, "checked");
    }
    if (this.state.itineraryFavourite === "checked") {
      localStorage.setItem(itineraryId, "unchecked");
    }

    // localStorage.setItem(itineraryId, !this.state.itineraryFavourite);
    console.log(localStorage.getItem(itineraryId));

    // let trueorfalse = localStorage.getItem(itineraryId);

    this.setState(
      {
        // itineraryFavourite: !this.state.itineraryFavourite,
        // itineraryMongoFavourite: JSON.parse(localStorage.getItem(itineraryId)),
        test: localStorage.getItem(this.props.id)
      },
      () => {
        if (
          this.state.itineraryFavourite === "unchecked" &&
          this.props.state.auth.isAuthenticated === true
        ) {
          console.log("istrue");
          this.props.postFavourites(favouriteData);
        }
        if (
          this.state.itineraryFavourite === "checked" &&
          this.props.state.auth.isAuthenticated === true
        ) {
          console.log("isfalse");
          this.props.deleteFavourites(favouriteData);
        }
      }
    );

    // let itineraryIdFav = localStorage.getItem(this.props.id);
    // favBoolean = [];
    // favBoolean.push({ [itineraryId]: itineraryIdFav });

    // this.setState({ favBoolean });
    // let favouritesArrayToCompare = this.props.state.favourites.favouritesArray
    //   .favourites;
    // let itineraryIdToCompare = this.props.id;

    // console.log(favouritesArrayToCompare);
    // console.log(itineraryIdToCompare);
    // let itineraryMongoFavourite = favouritesArrayToCompare.includes(
    //   itineraryIdToCompare
    // );
    // let test = itineraryMongoFavourite;
    // this.setState({
    //   itineraryMongoFavourite: test
    // });

    // }

    // console.log(favouritesArrayToCompare.includes(itineraryIdToCompare));
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
    this.getlocalstorage();
  }

  // update(e, space, txt) {
  //   console.log(e.target, space, txt);
  // }
  render() {
    //CANCELLLED OUT//
    // console.log(this.props.id);
    // var token = localStorage.getItem("token");
    // var decoded = jwt_decode(token);
    // console.log(decoded.favourites);

    // let favouritesArray = decoded.favourites;
    // let favouritesComponentId = this.props.id;

    // let favouriteOrNot = favouritesArray.includes(favouritesComponentId);
    // console.log(favouriteOrNot);

    //if this.props.id matches an id in the favourites array, display a red icon//
    //if this.props.id does not match an id in the favourites array,display a white icon//

    // console.log(this.props.favou)

    // if (localStorage.getItem(this.state.itineraryId === true)) {
    // }

    return (
      <div>
        {this.props.state.auth.isAuthenticated ? (
          <div onClick={e => this.makeFavourite(e)}>
            {true ? (
              <div>
                <MdFavorite
                  size={36}
                  className="itinerary-favourite-icon itinerary-favourite-icon-red"
                />
              </div>
            ) : (
              <div>
                <MdFavorite
                  size={36}
                  className="itinerary-favourite-icon-white"
                />
              </div>
            )}
          </div>
        ) : (
          <div onClick={e => this.loginAlert(e)}>
            <Link to="/">
              <MdFavorite
                size={36}
                className="itinerary-favourite-icon-white"
              />
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps.id);

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
