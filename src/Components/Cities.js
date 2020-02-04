import React, { Component } from 'react'
import FilterCities from './FilterCities'


const cityURL = "http://localhost:5000/cities/all"


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
   

    this.filterCities()


  }

 

  filterCities = () => {
    let cityFilterExtracted = ''

    if(this.state.isFetching !== true & this.state.cityFilter !==undefined){

    
cityFilterExtracted = this.state.cityFilter


    
    let filteredCities = this.state.cities
 



    filteredCities = filteredCities.filter((city) => {
  
      let cityName = city.name.toLowerCase() 
      let country = city.country.toLowerCase() 

      if(cityName.includes(
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
 
       
                  
        }
        
        
        );
      
        
    }
 
 

    
    render(props) {



      let listItemsMap =''
      let userCitySelection=''
      let filteredCities = ''
     
     if(this.state.isFetching !== true  ){
     
     

         const {filteredCities} = this.state;
         listItemsMap = filteredCities.map((cityMapper) =>

         <li key={cityMapper._id}>{cityMapper.name}</li> 
         );
    
      
          
     }
     
    
    
      
        return (
          
            
            <div>
              <FilterCities cities = {this.state.cities}  onChangeValue ={this.handleChangeValue}  />
           
           
     
          {listItemsMap}
          
            </div>
        )
      
            
   
    }

   
}

