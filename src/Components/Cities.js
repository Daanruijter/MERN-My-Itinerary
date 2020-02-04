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

 

  filterCities = (cityFilter) => {
    let filteredCities = this.state.cities


    console.log(filteredCities + "ADASDADKAD")

    filteredCities = filteredCities.filter((city) => {
      let cityName = city.cities.toLowerCase() 
      return cityName.indexOf(
        cityFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredCities
      
    })
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
      let test=''
      let filteredCities = ''
     
     if(this.state.isFetching !== true ){
     


         const {cities} = this.state;
         listItemsMap = cities.map((cityMapper) =>

         <li key={cityMapper._id}>{cityMapper.name}</li> 
         );

         filteredCities = this.state.cities
         test = <FilterCities cities = {this.state.cities} match={this.props.match} onChange={this.filterCities}  ></FilterCities>
     }
     
      
      
        return (
            
            <div>
           
              {listItemsMap}
          {test}
          
            </div>
        )
      
            
   
    }

   
}

