import {
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE,
    SEND_USER_INPUT
} from '../actions/cityTypes'


const initialState = {
    loading: true,
    cities: [],
    cityFilter: '',
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CITIES_SUCCESS:
            return {
                loading: false,
                cities: action.payload,
                error: ''
            }
        case FETCH_CITIES_FAILURE:
            return {
                loading: false,
                    cites: [],
                    error: action.payload
            }
            case SEND_USER_INPUT:
                return {
                   cityFilter: action.text
                }

        default:
            return state
    }
}
export default reducer