
import '../CSS/materialize.min.css'
import React from 'react'
import DSC_0265 from '../Pictures/DSC_0265.JPG';
import  '../CSS/CityCard.css';




export default function CityCard(props) {
    return (
        <div>
           
           <div className="card">
          <div className="card-image">
          <img className ="city-image" src={props.image} alt ="DSC_0265"/>
            <a href="" className="halfway-fab btn-floating pink pulse">
              <i className="material-icons">favorite</i>
            </a>
          </div>
          <div className="card-content">
            <span className="card-title">{props.cityname}, {props.country}</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <div className="card-action">
            <a href="">More details</a>
            <a href="">View Ingredients</a>
          </div>
        </div>
      </div>






    
    )
}
