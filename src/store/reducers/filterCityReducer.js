import {
   
    SEND_USER_INPUT
} from '../actions/cityTypes'


const initialState = {
 
    cityFilter: ''
    
}

const reducer = (state = initialState, action) => {
    console.log(action.text)
   
    switch (action.type) {
       
            case SEND_USER_INPUT:
                return {
                   cityFilter: action.text
                }

        default:
            return state
    }
}
export default reducer