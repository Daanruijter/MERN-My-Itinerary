import {
    SEND_USER_REGISTRATIONDATA
   
} from '../actions/userTypes'


const initialState = {
    
    user: ''
  
    
}

const reducer = (state = initialState, action) => {
    console.log("line15" + action.type)
    switch (action.type) {
        case SEND_USER_REGISTRATIONDATA:
            return {
                ...state,
                user: action.payload
            }
        
         

        default:
            return state
    }
}
export default reducer