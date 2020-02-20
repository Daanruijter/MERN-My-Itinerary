
import Activities from "./Activities";
import {connect} from 'react-redux'
import {fetchItineraries} from '../store/actions/itineraryActions'

import '../CSS/Itinerary.css';
import React, { Component } from 'react'

import homeIcon from '../Pictures/homeIcon.png';
// import { matchPath, withRouter } from 'react-router';



 

class Itinerary extends Component {
   

   state = {
    Barcelone: [
        {title: "titleb",
        img:"imgb",
        id:"1b"
    },
    {title: "title2b",
        img:"img2b",
        id:"2b"
    },
    {title: "title3b",
        img:"img3b",
        id:"3b"
    },
    {title: "title4b",
        img:"img4b",
        id:"4b"
    },
    {title: "title5b",
        img:"img5b",
        id:"5b"
    },
    {title: "title6b",
        img:"img6b",
        id:"6b"
    }


    ],
    Amsterdam: [
        {title: "titlea",
        img:"imga",
        id:"1a"
    },
    {title: "title2a",
        img:"img2a",
        id:"2a"
    }
    ,
    {title: "title3a",
        img:"img3a",
        id:"3a"
    }
    ,
    {title: "title4a",
        img:"img4a",
        id:"4a"
    }
    ,
    {title: "title5a",
        img:"img5a",
        id:"5a"
    }
    ,
    {title: "title6a",
        img:"img6a",
        id:"6a"
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