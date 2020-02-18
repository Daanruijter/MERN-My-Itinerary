import {
   
    SEND_CITYNAME
} from '../actions/cityTypes'


const initialState = {
 
    cityName: ''
    
}

const reducer = (state = initialState, action) => {
   console.log(action.value + "ACTIONNNNN")
   
    switch (action.type) {
       
            case SEND_CITYNAME:
                return {
                   cityName: action.value
                }

        default:
            return state
    }
}
export default reducer