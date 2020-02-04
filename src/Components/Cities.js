import React, { Component } from 'react'


const cityURL = "http://localhost:5000/cities/all"
const citiesToDisplay = ""






// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );

// let cities = [
//     {
//         "_id": "5e3827091c9d4400006098dc",
//         "name": "Amsterdam",
//         "country": "Netherlands"
//     },
//     {
//         "_id": "5e3827931c9d4400006098dd",
//         "name": "Barcelona",
//         "country": "Spain"
//     }
// ]



export default class Cities extends Component {


  state = {
    isFetching: false
  }

 
  
    // getInitialState = function (){
    //     return ({
    //         cities: []
    //     })
    // }

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
     
     
      
      // const {cities} = this.state;
      //   const listItemsMap = cities.map((city) =>

      //   <li key={city.id}>{city.name}</li>
      //   );
        


      //   console.log(cities)

      

      
            
         
                // console.log(this.state.quotes)
        //    let  cities = this.state.quotes;
            // console.log(cities)

            // cities = cities.map(function(city, index){
            // return (<li key={index}>
            //     {city}
            // </li>)
            // })
     
        return (
            
            <div>
            
              {/* {listItems} */}
              {/* {listItemsMap} */}
          
            </div>
        )
      
            
   
    }

   
}

