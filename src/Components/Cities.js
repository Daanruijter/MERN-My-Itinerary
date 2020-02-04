import React, { Component } from 'react'
import FilterCities from './FilterCities'


const cityURL = "http://localhost:5000/cities/all"
const citiesToDisplay = ""





export default class Cities extends Component {


  state = {
    isFetching: true,
    cities : [],
    filteredCities: [],

  }


  handleChangeValue = (e) => {

    this.setState({
      cityFilter: e.target.value
    })
   
    console.log(this.state.cityFilter)

    this.filterCities()


  }

 

  filterCities = () => {
    let cityFilterExtracted = ''

    if(this.state.isFetching !== true & this.state.cityFilter !==undefined){
// console.log(this.state.cities)
    
cityFilterExtracted = this.state.cityFilter
// console.log(cityFilterExtracted)

    
    let filteredCities = this.state.cities
    // console.log(filteredCities)



    filteredCities = filteredCities.filter((city) => {
      // console.log(city)
      let cityName = city.name.toLowerCase() 
      return cityName.includes(
        cityFilterExtracted.toLowerCase())
    })
    console.log(filteredCities)
    // console.log(cityFilterExtracted)
    
    this.setState({
      filteredCities
      
    })
  }
  

}



    componentDidMount(){
     
   this.setState({...this.state, isFetching: true})
  
        fetch(cityURL)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
            this.setState({cities: result, 
            isFetching: false,
          
            filteredCities: this.state.cities
          })
          console.log(result);
          console.log(this.state)
              
       
                  
        }
        
        
        );
      
        
    }
 
 

    
    render(props) {



      let listItemsMap =''
      let userCitySelection=''
      let filteredCities = ''
     
     if(this.state.isFetching !== true  ){
     
      console.log(this.state.filteredCities)

         const {filteredCities} = this.state;
         listItemsMap = filteredCities.map((cityMapper) =>

         <li key={cityMapper._id}>{cityMapper.name}</li> 
         );
      console.log(filteredCities)
      
          
     }
     
     let filteredCitiesName = this.state.filteredCities
     console.log(listItemsMap)
      
        return (
          
            
            <div>
              <FilterCities cities = {this.state.cities} match={this.props.match}  value ={this.state.value} onChangeValue ={this.handleChangeValue}  />
           
           
     
          {listItemsMap}
          
            </div>
        )
      
            
   
    }

   
}

