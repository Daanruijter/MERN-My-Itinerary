
import '../CSS/materialize.min.css'
import React from 'react'
import DSC_0265 from '../Pictures/DSC_0265.JPG';
import Cities from './Cities'
import  '../CSS/CityCard.css';



export default function CityCard(props) {
  console.log(props)
  
    return (
        <div className = "citycard-wrapper">
           
           <div className="card">
          <div className="card-image">
          <img className ="city-image" src={props.image}  alt ="DSC_0265"/>
            <a href="" className="halfway-fab btn-floating pink pulse">
              <i className="material-icons">favorite</i>
            </a>
          </div>
          <div className="card-content">
            <span  className="card-title">{props.cityname}, {props.country} </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <div className="card-action">
            <a  href={`/itinerary/${props.cityname}`}>Show {props.cityname} Itineraries</a>
            
          </div>
        </div>
      </div>






    
    )
}
