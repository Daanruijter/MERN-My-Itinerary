import  {
    FETCH_ITINERARIES_REQUEST, 
    FETCH_ITINERARIES_SUCCESS, 
    FETCH_ITINERARIES_FAILURE,
   
    
} from './itineraryTypes'
 

//fetch data//
export const fetchItinerariesRequest = () => {
    
    return {
        type: FETCH_ITINERARIES_REQUEST,
        
    }

}


export const fetchItinerariesSuccess  = cities => {
    return {
        type: FETCH_ITINERARIES_SUCCESS,
        payload: cities
    }
}


export const fetchItinerariesFailure = (error) => {
    return {
        type: FETCH_ITINERARIES_FAILURE,
        payload: error

    }
}




export const fetchItineraries = () => {
    
    return(dispatch) => {
        dispatch(fetchItinerariesRequest())

        return fetch("http://localhost:5000/itineraries/Valencia", {
            method: "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            console.log(response); 
            return response.json()
        })
        .then(data => {
            const itineraries = data
            console.log(itineraries)
            dispatch(fetchItinerariesSuccess(itineraries))
        })
        .catch (error => {
            const errorMessage = error.message
            dispatch(fetchItinerariesFailure(errorMessage))
            console.log(errorMessage)
        })
    }
    
}

