import React, { Component } from 'react'

export default class FilterCities extends Component {

    state = {
        cityFilter: ""
      }


      handleChange = (e) => {
        this.setState({
          cityFilter: e.target.value
        })
        // this.props.onChange(e.target.value)
        console.log(this.state.cityFilter)
      }

    render() {
        return (
            <div>
                 <label htmlFor="filter">Filter by City: </label>
        <input type="text" id="filter" 
          value={this.state.cityFilter} 
          onChange={this.handleChange}/>
            </div>
        )
    }
}
