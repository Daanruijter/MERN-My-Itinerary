

import {connect} from 'react-redux'
import {fetchItineraries} from '../store/actions/itineraryActions'


import React, { Component } from 'react'
class Itinerary extends Component {
    

    componentDidMount(){
        this.props.fetchItineraries()

        
    }
 
    render() {
        return (
            <div>
                
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
        fetchItineraries: () => dispatch(fetchItineraries()),

        
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Itinerary)