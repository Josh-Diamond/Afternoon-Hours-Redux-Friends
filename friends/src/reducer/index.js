import { FETCHING, SUCCESS, FAILURE, LOGIN_START, LOGIN_SUCCESS } from '../actions';

const intialState = {
    friends: [],
    isFetching: false,
    err: '',
    isLoggingIn: false
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                isFetching: true,
            }
        case SUCCESS:
            return {
                ...state,
                isFetching: false,
                friends: action.payload
            }
        case FAILURE:
            return {
                ...state,
                isFetching: false,
                err: action.payload
            }
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false
            }
        default:
            return state
    }
}

export default reducer;

