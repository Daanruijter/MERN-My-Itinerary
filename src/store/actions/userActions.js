import  {
    SEND_USER_REGISTRATIONDATA
    
} from './userTypes'


export const sendUserRegistrationData = user => {
    
    return {
        type: SEND_USER_REGISTRATIONDATA,
        payload: user
    }
}


