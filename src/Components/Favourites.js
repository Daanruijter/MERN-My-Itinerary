import React, { Component } from "react";
import { connect } from "react-redux";

class Favourites extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <div>test</div>;
  }
}

//get data from Redux//
const mapStateToProps = () => {
  return {};
};

//fires actions to Redux (in this case the fetchfunction)//
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
