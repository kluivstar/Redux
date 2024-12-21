const redux = require('redux')
const createStore = redux.createStore // create store function

const BUY_CAKE ='BUY_CAKE'

// Action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action' // optional metadata about action
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

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()