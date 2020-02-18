

import {connect} from 'react-redux'
import {fetchItineraries} from '../store/actions/itineraryActions'

import '../CSS/Itinerary.css';
import React, { Component } from 'react'

import homeIcon from '../Pictures/homeIcon.png';
import { matchPath, withRouter } from 'react-router';



 

class Itinerary extends Component {
   

   
    componentDidMount(){
        
      
        let cityItinerariesToBeFetched = this.props.match.params.name
        console.log(cityItinerariesToBeFetched)
   
        this.props.fetchItineraries(cityItinerariesToBeFetched)

   
       
    }
 




    render() {
        
        
        
        let cityNameId = this.props.match.params.name
        
        
        let cityName = ''
        console.log(cityNameId)
        
       

        if (cityNameId === "5e3827091c9d4400006098dc") {
            cityName ="Amsterdam"
        }
            
        if (cityNameId === "5e3827931c9d4400006098dd") {
            cityName ="Barcelone"
        }
            
        if (cityNameId === "5e3940891c9d4400002af049") {
            cityName ="Malaga"
        }
            
        if (cityNameId === "5e3940c01c9d4400002af04a") {
            cityName ="Valencia"
        }
            
        if (cityNameId === "5e3940de1c9d4400002af04b") {
            cityName ="Paris"
        }

    

        const hashtag = this.props.itineraries.map((itinerary) => itinerary.hashtags)
        console.log(hashtag)

                
        let itinerariesForSpecificCity  = this.props.itineraries.map((itinerary) =>

        
        <div className = "itinerary-cards-container" key={itinerary._id}>

        <div className = "itinerary-cards-gridmaker">

              <div className="profile-picture"><img className ="profile-picture" src ={itinerary.profilePicture} alt ="profile-picture"/></div>
         
            <div className="itinenary-title">
            {itinerary.title}
            </div>
            <div className="itinenary-rating">
            <b>Likes</b>: {itinerary.rating}
            </div>
            <div className="itinenary-duration">
            <b>Duration</b>: {itinerary.duration}    
            </div>
            <div className="itinenary-price">
            <b>Price</b>: {itinerary.price}
            </div>
            <div className="itinenary-hashtags">
                
            {itinerary.hashtags}
            </div>
            <div className="itinenary-more-information">
            Click <a href = {itinerary.moreInformation}>here</a> for more information
            </div>
            
            <div className ="itinerary-image">
            <img className ="itinerary-image-height" src ={itinerary.image}/>
            </div>
            </div>
            
        </div>
        )

        
        return (
            <div className ="itinerary-page-container">
            <div className = "itinerary-container">
        <p className ="available-mytineraries">Available MYtineraries for {cityName}:</p>
               
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