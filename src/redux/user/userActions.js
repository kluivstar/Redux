export const userSuccess = (users) => {
    return {
        type: 'USER_SUCESS',
        payload: users
    }
}

export const userRequest = () => {
    return {
        type: 'USER_REQUEST'
    }
}

export const userFailure = (error) => {
    return {
        type: 'USER_FAILURE',
        payload: error
    }
}