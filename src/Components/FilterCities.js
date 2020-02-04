import React, { Component } from 'react'

export default class FilterCities extends Component {

    state = {
        cityFilter: ""
      }



    render() {
        return (
            <div>
                 <label htmlFor="filter">Filter by City: </label>
        <input type="text" id="filter" 
    
          onChange={this.props.onChangeValue}
          />
            </div>
        )
    }
}
