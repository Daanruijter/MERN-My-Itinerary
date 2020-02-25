import React, { Component } from 'react'
import '../CSS/CreateAccount.css'
import {sendUserRegistrationData} from '../store/actions/userActions.js'
import { connect } from "react-redux";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName:"",
      password: "",
      email: "",
      picture: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {

    // console.log("sdslalj")
    // console.log(e)
    // const target = e.target
    // const value = target.value
    // const name = target.name
    // const password = target.password
    // const email = target.email
    // const picture = target.picture

    this.setState({
      
      [e.target.name]: e.target.value,
      
      // password: value,
    // //   email: email, 
    //   picture: picture
 
     });
  }

  handleSubmit = (e) => {
    console.log("handlesubit")
    console.log(this.state)
    // alert('A name was submitted: ' + event.target.value);
    e.preventDefault();
    
  
     let user = this.state
     console.log(user)
this.props.sendUserRegistrationData(user)
    this.setState({
      
      [e.target.name]: e.target.value,
      
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      picture: ""

 
     });
  
  };


   


  render() {
    return (
      <div className= "user-form">
        
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input name="firstName"  placeholder="first name" type="text" value={this.state.firstName} onChange={e => this.handleChange(e)} />
        </label>
        <label><br/>
          Last name:
          <input name="lastName"  placeholder="last name" type="text" value={this.state.lastName} onChange={e => this.handleChange(e)} />
        </label>
       <label><br/>
       
          password:
          <input name="password" placeholder="password" type="password" value={this.state.password} onChange={e => this.handleChange(e)} />
        </label>
        <label><br/>
          e-mail:
          <input name="email" placeholder="e-mail" type="text" value={this.state.email} onChange={e => this.handleChange(e)} />
        </label>
        <label><br/>
          picture:
          <input name="picture" placeholder="picture" type="text" value={this.state.picture} onChange={e => this.handleChange(e)} />
        </label><br/>
        <input onClick ={(e) => this.handleSubmit(e)} type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

//get data from Redux//
const mapStateToProps = state => {
  return {
    users: state.userReducer.users
  };
};

//fires actions to Redux (in this case the fetchfunction)//
const mapDispatchToProps = dispatch => {
  return {
    sendUserRegistrationData: user => dispatch(sendUserRegistrationData(user)),
  };   
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
