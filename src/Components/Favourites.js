import React, { Component } from "react";
import { connect } from "react-redux";

class Favourites extends Component {
  render() {
    return <div>test</div>;
  }
}

//get data from Redux//
const mapStateToProps = state => {
  return { state: state };
};

//fires actions to Redux (in this case the fetchfunction)//
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
