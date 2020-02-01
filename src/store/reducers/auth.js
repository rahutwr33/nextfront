import { 
    LOGIN_TYPE,
    REGISTER_TYPE,
    CURRENT_USER,
    LOGOUT
   } from '../action-type';
import { initialState } from './initial';

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_TYPE:
            return {...state,
                 login:action.payload
            }
        case REGISTER_TYPE:
        return {...state,
            register:action.payload
        }
        case CURRENT_USER:
            return {...state,
                isloggedin:!initialState.auth.isloggedin
            }
        case LOGOUT:
            return state
        default:
          return state
    }
}