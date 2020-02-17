

import {connect} from 'react-redux'
import {fetchItineraries} from '../store/actions/itineraryActions'
import { withRouter } from 'react-router'

import React, { Component } from 'react'




   
   
 

class Itinerary extends Component {

    // functionMethod() {
    //     const { history: { push } } = this.props;
    //     doStuff();
    //     push('/location');
    //   }

    componentDidMount(){
        console.log("testttt")
      
        // let cityItinerariesToBeFetched = this.props.match.params.name
        // console.log(cityItinerariesToBeFetched)
   
        // this.props.fetchItineraries(cityItinerariesToBeFetched)

        
    }
 
    // listItemsMap = filteredCities.map((cityMapper) =>
    // <div className ="citycard" key={cityMapper._id}>
    //   <CityCard click = {this.handleClick} cityname={cityMapper.name} country={cityMapper.country} image={cityMapper.image}></CityCard>
    //   <ul>

    render() {
        // let its = this.props.itineraries
        console.log()
        
        // let showThis =its.map((item) => <div>{item}</div>)
        // // console.log(showThis)
        
        return (
            <div>
               
                <p>sssss</p>
                <p>sssss</p>
                <p>sssss</p>
                <p>sssss</p>
                <p>sssss</p>
                <p></p>    
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