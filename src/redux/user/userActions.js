import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './userTypes'
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    }
}
export const fetchUsersSuccess = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
}

