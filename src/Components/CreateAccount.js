import React, { Component } from 'react'
import '../CSS/CreateAccount.css'

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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

  handleSubmit = () => {
    console.log("handlesubit")
    console.log(this.state)
    // alert('A name was submitted: ' + event.target.value);
    // event.preventDefault();
  };


   


  render() {
    return (
      <div className= "user-form">
        
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name"  placeholder="first name" type="text" value={this.state.name} onChange={e => this.handleChange(e)} />
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
        <input onClick ={() => this.handleSubmit()} type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}
