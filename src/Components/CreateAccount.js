
// import '../CSS/materialize.min.css'
import React from 'react'
import DSC_0265 from '../Pictures/DSC_0265.JPG';




export default function CreateAccount() {
    return (
        <div>
           
           <div class="card">
          <div class="card-image">
          <img className ="city-image" src={DSC_0265} alt ="DSC_0265"/>
            <a href="http://www.ns.nl" class="halfway-fab btn-floating pink pulse">
              <i class="material-icons">favorite</i>
            </a>
          </div>
          <div class="card-content">
            <span class="card-title">Mango & Chickpea Curry</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <div class="card-action">
            <a href="http://www.ns.nl">More details</a>
            <a href="http://www.ns.nl">View Ingredients</a>
          </div>
        </div>
      </div>






    
    )
}
