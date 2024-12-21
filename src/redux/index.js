const BUY_CAKE ='BUY_CAKE'

// Action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
    
}

// State
const initialState = {
    numOfCakes: 10
}

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ... state, // Copy of state
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}