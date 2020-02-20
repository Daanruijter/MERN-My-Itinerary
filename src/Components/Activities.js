import React, { Component } from 'react'
import {Itinerary} from "./Itinerary";
import '../CSS/Activities.css';

export default class Activities extends Component {
    
    openCaroussel = function () {
    
        this.setState(prevState => ({ 
            
            carousselOpen: !prevState.carousselOpen,
         
      
             }))
    
     }
    
         handleClick = () => {
             console.log("HANDLECLICK")
    
             this.openCaroussel()
           
    
    
    
        }
          

    state ={
        carousselOpen:false,
       

        
     
    }

    render() {
        return (
            <div>
                <div className="itinenary-click-here-fore-more-information">
            Click <a href = {this.props.itinerary.moreInformation}>here</a> for more information
            </div>
            <div className ="also" key={this.props.index} matcher = {this.props.itinerary._id} onClick = {()=> {this.handleClick()}} 
            
            className="activities-also-nice">
            ALSO NICE TO DO</div>
            
            {this.state.carousselOpen?
                    <div className="activities-content" > 
         show me<br/>
         show me<br/>
         show me<br/>
         show me<br/>
         show me<br/>
         show me<br/>
         show me<br/>
         show me<br/>
         <p className="activities-close" key={this.props.index} matcher = {this.props.itinerary._id} onClick = {()=> {this.handleClick()}}>close</p>
         
        </div>
        : null  }
            </div>
        )
    }
}
