import React, { Component } from 'react'

export default class Login extends Component {
    state ={
        showMe:false,
        hideMe: false
    }
    openCaroussel = ()  => {
        this.setState({showMe:true})
    }
    closeCaroussel = () => {
        this.setState({showMe:false})
    }



    render() {
        return (
            <div>
                <div onClick = {()=> {this.openCaroussel()}}>click here to see more info</div>


                {this.state.showMe?
                    <div > 
         show me<br/>
         show me<br/>
         show me<br/>
         <p onClick = {()=> {this.closeCaroussel()}}>close</p>
        </div>
        :null   }
         </div>   
        )
    }
}


   
