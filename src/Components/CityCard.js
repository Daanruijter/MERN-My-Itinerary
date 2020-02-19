import "../CSS/materialize.min.css";
import React from "react";
// import DSC_0265 from "../Pictures/DSC_0265.JPG";
// import Cities from "./Cities";
// import Itinerary from "./Itinerary";
import "../CSS/CityCard.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { sendCityName } from "../store/actions/cityActions";
import { connect } from "react-redux";

 function CityCard(props) {

  // let cityname=props.cityname

   const handleClick = () => {
     alert(props.cityname)
     let cityName=props.cityname
   
    sendCityName(cityName);
    }



  return (
    <div className="citycard-wrapper">
      <div className="card">
        <div className="card-image">
          <img className="city-image" src={props.image} alt="DSC_0265" />
          {/* let op: deze link is niet goed, maar puur om errors weg te werken */}
          <a href="http://www.ns.nl" className="halfway-fab btn-floating pink pulse">
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
          <a onClick={()=> {handleClick()}} href={`/itinerary/${props.id}/${props.cityname}`}>
         
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



//fires actions to Redux 
const mapDispatchToProps = (dispatch) => {
  
  return {

    sendCityName: cityName =>
      dispatch(sendCityName(cityName))
  };
};





export default connect(mapDispatchToProps)(CityCard);
