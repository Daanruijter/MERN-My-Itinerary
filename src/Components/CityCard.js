import "../CSS/materialize.min.css";
import React from "react";
import DSC_0265 from "../Pictures/DSC_0265.JPG";
import Cities from "./Cities";
import Itinerary from "./Itinerary";
import "../CSS/CityCard.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { sendCityName } from "../store/actions/cityActions";
import { connect } from "react-redux";

 function CityCard(props) {
  console.log("sdjahdadhl");
  console.log(props.cityname);
 

  const handleClick = (e) => {
    e.preventDefault(e)
    sendCityName(props.cityname);
    console.log("test");
  };

  // renderItem = (text) => {
  //     return (
  //         <div>
  //             {text.map(item => (
  //                 <Button text={item.name} onClick={this.handleClick} />
  //             ))}
  //         </div>
  //     );
  // }

  return (
    <div className="citycard-wrapper">
      <div className="card">
        <div className="card-image">
          <img className="city-image" src={props.image} alt="DSC_0265" />
          <a href="" className="halfway-fab btn-floating pink pulse">
            <i className="material-icons">favorite</i>
          </a>
        </div>
        <div className="card-content">
          <span className="card-title">
            {props.cityname}, {props.country}{" "}
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis
            aliquam orci. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
        </div>
        <div className="card-action">
          <a
          onClick={() => handleClick()}
                href={`/itinerary/${props.id}/${props.cityname}`} 
          >
         
            Show {props.cityname} Itineraries{" "}
          </a>
          {console.log(props.id)}
        </div>
      </div>
    </div>
  );
}

{
}

// get data from Redux//
const mapStateToProps = state => {
  console.log("STATTTT")
  return {
cityName:state
  };
};

//fires actions to Redux (in this case the fetchfunction)//
const mapDispatchToProps = dispatch => {
  return {

    sendCityName: cityname =>
      dispatch(sendCityName(cityname))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);
