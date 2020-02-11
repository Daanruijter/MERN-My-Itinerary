import React, { Component } from 'react'
import FilterCities from './FilterCities'
import CityCard from './CityCard'
import homeIcon from '../Pictures/homeIcon.png';
import '../CSS/Cities.css';
import DSC_0265 from '../Pictures/DSC_0265.JPG';
import {fetchCities} from '../store/actions/cityActions'
import {connect} from 'react-redux'
// import '../CSS/materialize.min.css'




const cityURL = "http://localhost:5000/cities/all"

class Cities extends Component {


  state = {
    isFetching: true,
    cities : [],
    filteredCities: [],

  }




  handleChangeValue = (e) => {

    this.setState({
      cityFilter: e.target.value
    })
   

    this.filterCities()


  }

 

  filterCities = () => {
    let cityFilterExtracted = this.state.cities


    if(this.state.isFetching !== true & this.state.cityFilter !==undefined){

    
cityFilterExtracted = this.state.cityFilter


    
    let filteredCities = this.state.cities
 



    filteredCities = filteredCities.filter((city) => {
  
      let cityName = city.name.toLowerCase() 
      let country = city.country.toLowerCase() 

      if(cityName.toLowerCase().includes(
        cityFilterExtracted.toLowerCase()) ||country.includes(
          cityFilterExtracted.toLowerCase()) ){  return cityName
        
      }

    
    })


    
    this.setState({
      filteredCities
      
    })
  }
  

}



    componentDidMount(){
        this.props.fetchCities()

        
    }
 
 

    
    render() {

        console.log(this.props.cities )

      let listItemsMap =''
  
     
     if(this.props.loading !== true  ){
      
     

         const filteredCities = this.props.cities;
         listItemsMap = filteredCities.map((cityMapper) =>
        <div className ="citycard" key={cityMapper._id}>
          <CityCard cityname={cityMapper.name} country={cityMapper.country} image={cityMapper.image}></CityCard>
          <ul>
      
        
         </ul>
   
         </div>
         );
    
      
          
     }
     
     
      if(listItemsMap.length === 0){
        return (
          
          <div className = "no-cities-box">
           
      
      <div className = "city-inputfield-container">
        
          <FilterCities cities = {this.state.cities}  onChangeValue ={this.handleChangeValue}  />
          </div>

            <p className="no-cities">No cities found!</p>
            <div className ="homeicon-container-no-cities">
            <a href='/'><div className = "home-flexer-no-cities"><img className = "homeIcon" src = {homeIcon} alt ="homeIcon"/></div></a>
         
        </div>
        
          </div>
        )

      }
      
        return (
            
            
            <div className="city-container">
      
          <div className = "city-inputfield-container">
            
              <FilterCities cities = {this.state.cities}  onChangeValue ={this.handleChangeValue}  />
              </div>

              <div className = "citycards-container">
     
          {listItemsMap}
          </div>
          
           <div className ="homeicon-container">
            <a href='/'><div className = "home-flexer"><img className = "homeIcon" src = {homeIcon} alt ="homeIcon"/></div></a>
         
        </div>
          
            </div>
        )
      
            
   
    }

   
}


const mapStateToProps = state => {
    return {
        cities: state.cities.cities,
        filteredCities: state.cities.cities,
        isLoading: state.cities.loading
    }
}

//fires the fetchfunction//
const mapDispatchToProps = dispatch => {
    return {
        fetchCities: () => dispatch(fetchCities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Cities)