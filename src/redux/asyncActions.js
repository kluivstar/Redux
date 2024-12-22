const redux = require('redux')
const createStore = redux.createStore
const thunkMiddleware = require('redux-thunk')
const axios = require('axios')
const applyMiddleware = redux.applyMiddleware

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
// async action
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log('Response')
            const users = response.data.map(user => user.id)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUserFailure(error.message))
        })
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

// Create Store while applying the middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
console.log('Initial state', store.getState())

store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUsers())