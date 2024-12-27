import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './userTypes'

const initialUserState = {
    numOfUser: 10,
    users: [],
    error: ''
}

export const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
        return {
            loading: false,
            error: action.payload,
            users: []
        }
        default: return state
    }
}