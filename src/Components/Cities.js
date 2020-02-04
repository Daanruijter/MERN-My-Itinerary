import React, { Component } from 'react'


const cityURL = "http://localhost:5000/cities/all"
const citiesToDisplay = ""





export default class Cities extends Component {


  state = {
    isFetching: true
  }

 
  


    componentDidMount(){
   this.setState({...this.state, isFetching: true})
  
        fetch(cityURL)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
            this.setState({cities: result, 
            isFetching: false})
          console.log(result);
          console.log(this.state)
              
       
                  
        }
        
        
        );

        
    }
 
 

    
    render(props) {

      let listItemsMap =''
     
     if(this.state.isFetching !== true ){
     


         const {cities} = this.state;
         listItemsMap = cities.map((cityMapper) =>

         <li key={cityMapper._id}>{cityMapper.name}</li> 
         );
     }
     
      
      
        return (
            
            <div>
           
              {listItemsMap}
          
            </div>
        )
      
            
   
    }

   
}

