
import '../CSS/materialize.min.css'
import React from 'react'
import DSC_0265 from '../Pictures/DSC_0265.JPG';
import Cities from './Cities'
import Itinerary from './Itinerary'
import  '../CSS/CityCard.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'



export default function CityCard(props) {
  
  
    return (
      
    
        <div className = "citycard-wrapper">
      {console.log(props)}     
           <div className="card">
             {console.log(props)}
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
     

            <a onClick = {props.click()} href={`/itinerary/${props.id}`} >Show {props.cityname} Itineraries </a>
            {console.log(props.id)}

          </div>
        </div>
      </div>






    
    )
}


       {/* <BrowserRouter>
            <Route exact path='/Cities/gek' component = {Itinerary}/>
            </BrowserRouter> */}