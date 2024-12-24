import {BUY_CAKE} from './cakeTypes'

// Default cake state
const initialState ={
    numOfCakes: 10
}

// The BUY_CAKE case reduces the numOfCakes state by the action.payload value.
export const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case 'BUY_CAKE': return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        default: return state
    }
}