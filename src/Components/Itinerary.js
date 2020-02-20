
import Activities from "./Activities";
import {connect} from 'react-redux'
import {fetchItineraries} from '../store/actions/itineraryActions'

import '../CSS/Itinerary.css';
import React, { Component } from 'react'

import homeIcon from '../Pictures/homeIcon.png';
// import { matchPath, withRouter } from 'react-router';



 

class Itinerary extends Component {
   

   state = {
    Amsterdam: [
        {
        activity: "Herengracht",
        image:"",
        url:"https://www.tripadvisor.co.uk/Attraction_Review-g188590-d266270-Reviews-Herengracht-Amsterdam_North_Holland_Province.html",
        id:"1"
        },
        {  
        activity: "Museum Quarter",
        image:"",
        id:"2",
        url:"https://www.tripadvisor.co.uk/Attraction_Review-g188590-d1174891-Reviews-Museum_Quarter-Amsterdam_North_Holland_Province.html"
        },
        {
        activity: "Ziggodome",
        image:"",
        url:"https://www.tripadvisor.co.uk/Attraction_Review-g188590-d3724408-Reviews-Ziggo_Dome-Amsterdam_North_Holland_Province.html",
        id:"3"
        },
        {
        activity: "Red light district",
        image:"",
        url:"https://www.tripadvisor.co.uk/Attraction_Review-g188590-d190584-Reviews-Red_Light_District-Amsterdam_North_Holland_Province.html",
        id:"4"
        },
        {
        activity: "De Poezenboot",
        image:"",
        url:"https://www.tripadvisor.co.uk/Attraction_Review-g188590-d1484592-Reviews-De_Poezenboot-Amsterdam_North_Holland_Province.html",
        id:"5"
        },
        {
        activity: "Rembrandtplein",
        image:"",
        url:"https://www.tripadvisor.co.uk/Attraction_Review-g188590-d259562-Reviews-Rembrandtplein-Amsterdam_North_Holland_Province.html",
        id:"6"
        }


    ],
    Barcelone: [
        {
        activity: "Tapas and wine",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g187497-d11461438-Tapas_and_Wine_Experience_Small_Group_Walking_Tour-Barcelona_Catalonia.html",
        id:"1"
        },
        {
        activity: "Flamenco",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g187497-d11991298-Flamenco_Show_Ticket_at_THEATRE_Barcelona_City_Hall-Barcelona_Catalonia.html",
        id:"2"
        },
        {
        activity: "Montserrat tour",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g187497-d11452580-Montserrat_Tour_from_Barcelona_Including_Lunch_and_Gourmet_Wine_Tasting-Barcelona_.html",
        id:"3"
        },
        {
        activity: "Picasso Museum",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g187497-d19807605-Skip_the_Line_Picasso_Museum_Entrance_Ticket-Barcelona_Catalonia.html",
        id:"4"
        },
        {
        activity: "Brewery",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g911483-d12923643-Skip_the_Line_Estrella_Damm_Brewery_Guided_Tour_Ticket_with_Tasting-El_Prat_de_Llo.html",
        id:"5"
        },
        {
        activity: "Evening tour",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g187497-d12577598-Barcelona_Highlights_Evening_Tour_Magical_Fountain_Show-Barcelona_Catalonia.html",
        id:"6"
        }
    
    ],
    Barcelone: [
        {
        activity: "Tapas and wine",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g187497-d11461438-Tapas_and_Wine_Experience_Small_Group_Walking_Tour-Barcelona_Catalonia.html",
        id:"1"
        },
        {
        activity: "Flamenco",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g187497-d11991298-Flamenco_Show_Ticket_at_THEATRE_Barcelona_City_Hall-Barcelona_Catalonia.html",
        id:"2"
        },
        {
        activity: "Montserrat tour",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g187497-d11452580-Montserrat_Tour_from_Barcelona_Including_Lunch_and_Gourmet_Wine_Tasting-Barcelona_.html",
        id:"3"
        },
        {
        activity: "Picasso Museum",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g187497-d19807605-Skip_the_Line_Picasso_Museum_Entrance_Ticket-Barcelona_Catalonia.html",
        id:"4"
        },
        {
        activity: "Brewery",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g911483-d12923643-Skip_the_Line_Estrella_Damm_Brewery_Guided_Tour_Ticket_with_Tasting-El_Prat_de_Llo.html",
        id:"5"
        },
        {
        activity: "Evening tour",
        image:"",
        url:"https://www.tripadvisor.co.uk/AttractionProductReview-g187497-d12577598-Barcelona_Highlights_Evening_Tour_Magical_Fountain_Show-Barcelona_Catalonia.html",
        id:"6"
        }
    
    ]

   }

    
    componentDidMount(){
        
        
        let cityItinerariesToBeFetched = this.props.match.params.name
      
     
   
        this.props.fetchItineraries(cityItinerariesToBeFetched)

   
       
    }
 


    render() {

        let city = this.props.match.params.cityName
    
        console.log(this.state[city])
     


                
        let itinerariesForSpecificCity  = this.props.itineraries.map((itinerary, index) =>
       
        
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
                     
            <div className ="itinerary-image">
            <img className ="itinerary-image-height" src ={itinerary.image}/>
            </div>
            <div className="itinenary-more-information">
            <Activities activities = {this.state[city]} index={index} itinerary={itinerary}></Activities>
            </div>
        </div>
            
            
        </div>
        
        )
   
        
        return (
            <div className ="itinerary-page-container">
            <div className = "itinerary-container">
        <p className ="available-mytineraries">Available MYtineraries for {this.props.match.params.cityName}:</p>
               
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
        
        // get data from Redux//

  cityName:state.cityName.cityName
   
  
        
        
    }
}

//fires actions to Redux (in this case the fetchfunction)//
const mapDispatchToProps = dispatch => {
    
  
  
    return {
        fetchItineraries: (cityItinerariesToBeFetched) => dispatch(fetchItineraries(cityItinerariesToBeFetched)),
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Itinerary);