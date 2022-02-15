import { GET_USERS, USER_ERROR, POST_USER, DELETE_USER } from "../actions/types";


const initialState = {
    user: null,
    users: [],
    loading: true,
    error: {}
  };

function registerReducer(state=initialState, action){
    const { type, payload } = action;

    switch(type){
        case GET_USERS:
            return{
                ...state,
                users: payload,
                loading: false
            };
        case POST_USER:
            return{
                ...state,
                users: [...state.users, payload],
                loading: false
            }    
        case USER_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
            };
            case DELETE_USER:
                return{
                    ...state,
                    users: state.users.filter(user => user._id !== payload ),
                    loading: false
                }
        default:
            return state; 
    }
}

export default registerReducer;
