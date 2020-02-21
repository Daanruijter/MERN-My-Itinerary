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
    let activities = this.props.activities.map((item) => <div key={item.id} className="activity-box">
        
        
        
        {item.activity}
        </div>)

        return (
            <div className="itinerary-activities-main-container">
                <div className="itinenary-click-here-fore-more-information">
            Click <a href = {this.props.itinerary.moreInformation}>here</a> for more information
            </div>
            <div className="activities-also-nice" key={this.props.index} matcher = {this.props.itinerary._id} onClick = {()=> {this.handleClick()}} 
            
            >
            ALSO NICE TO DO</div>
            
            {this.state.carousselOpen?
                    <div className="activities-content" > 
         
         
         <div className ="activities-flexer">
             {/* sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
         {activities}
         </div>
       
         <p className="activities-close" key={this.props.index} matcher = {this.props.itinerary._id} onClick = {()=> {this.handleClick()}}>close</p>
         
        </div>
        : null  }
            </div>
        )
    }
}
