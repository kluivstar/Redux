import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './userTypes'

const initialUserState = {
    numOfUser: 10,
    users: [],
    error: ''
}

const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
        return {
            loading: false,
            error: action.payload,
            users: []
        }
        default: return state
    }
}
export default userReducer