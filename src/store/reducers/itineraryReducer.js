import  {
    FETCH_ITINERARIES_REQUEST, 
    FETCH_ITINERARIES_SUCCESS, 
    FETCH_ITINERARIES_FAILURE,
   
    
} from '../actions/itineraryTypes'



const initialState = {
    loadingItineraries: true,
    itineraries: [],
  
    error: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_ITINERARIES_REQUEST:
          
            return {
                ...state,
                loadingItineraries: true
            }
        case FETCH_ITINERARIES_SUCCESS:
           
            return {
                loadingItineraries: false,
                itineraries: action.payload,
                error: ''
            }
        case FETCH_ITINERARIES_FAILURE:
      
            return {
                
                loadingItineraries: false,
                    itineraries: [],
                    error: action.payload
            }
         

        default:
            return state
    }
}
export default reducer