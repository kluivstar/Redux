const redux = require('redux')
const createStore = redux.createStore

// State
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Fetch users list
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
// Users fetched successfully
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
// Fetch request fails
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// Action Types
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        // if request is successfull, payload is set to users
        payload: users
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    // if action type is ____ return ____
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

    case FETCH_USERS_SUCCESS:
        return {
            loading: false,
            users: action.payload,
            error: ''
        }
    case FETCH_USERS_FAILURE:
        return {
            loading: false,
            users: [],
            error: action.payload
        }
        default: return state
    }
    
}

const store = createStore(reducer)