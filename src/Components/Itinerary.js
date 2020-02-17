

import {connect} from 'react-redux'
import {fetchItineraries} from '../store/actions/itineraryActions'

import '../CSS/Itinerary.css';
import React, { Component } from 'react'

import homeIcon from '../Pictures/homeIcon.png';


   
   
 

class Itinerary extends Component {

   
    componentDidMount(){
   
      
        let cityItinerariesToBeFetched = this.props.match.params.name
        console.log(cityItinerariesToBeFetched)
   
        this.props.fetchItineraries(cityItinerariesToBeFetched)

        
    }
 

    render() {
                
        let itinerariesForSpecificCity  = this.props.itineraries.map((itinerary) =>
        <div className = "itinerary-cards-container" key={itinerary._id}>

        <div className = "itinerary-cards-gridmaker">

              <div className="profile-picture"><img className ="profile-picture" src ={itinerary.profilePicture} alt ="profile-picture"/></div>
            <div className="itinenary-title">
            {itinerary.title}
            </div>
            <div className ="itinerary-image">
            <img className ="itinerary-image-height" src ={itinerary.image}/>
            </div>
            </div>
            
        </div>
        )

        
        return (
            <div>
            <div className = "itinerary-container">
            <p>Available MYtineraries:</p>
               
        {itinerariesForSpecificCity}
                </div>
              
           <div className ="homeicon-container">
            <a href='/'><div className = "home-flexer"><img className = "homeIcon" src = {homeIcon} alt ="homeIcon"/></div></a>
         
        </div>
           
                 </div>
            
        )
    }
}




//get data from Redux//
const mapStateToProps = state => { console.log(state.itineraries)
   
    return {
        

        loadingItineraries: state.itineraries.loadingItineraries,
        itineraries: state.itineraries.itineraries,
        
        
    }
}

//fires actions to Redux (in this case the fetchfunction)//
const mapDispatchToProps = dispatch => {
    
  
  
    return {
        fetchItineraries: (cityItinerariesToBeFetched) => dispatch(fetchItineraries(cityItinerariesToBeFetched)),
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Itinerary);