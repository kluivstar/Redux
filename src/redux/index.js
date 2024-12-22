const redux = require('redux')
const createStore = redux.createStore // create store function
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

// String constants
const BUY_CAKE ='BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action or one shop keeper
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action' // optional metadata about action
    }
    
}

function buyIceCreams(){
    return {
        type: BUY_ICECREAM,
        info: '' // optional metadata about action
    }
    
}

// Old State
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

// Split States
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// Old Reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ... state, // Copy of state
//             numOfCakes: state.numOfCakes -1
//         }
//         case BUY_ICECREAM: return {
//             ... state, // Copy of state
//             numOfIceCreams: state.numOfIceCreams -1
//         }
//         default: return state
//     }
// }

// New Reducers handling individual actions
const cakeReducer = (state= initialCakeState, action) => {
    switch(action.type) {
                case BUY_CAKE: return {
                    ... state, // Copy of state
                    numOfCakes: state.numOfCakes -1
                }
                default: return state
            }
}

const iceCreamReducer = (state= initialIceCreamState, action) => {
    switch(action.type) {
                case BUY_ICECREAM: return {
                    ... state, // Copy of state
                    numOfIceCreams: state.numOfIceCreams -1
                }
                default: return state
            }
}

// combine reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
// Create Store while applying the middleware
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => {})

// Dispatch actions
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreams())

// Unsubcribe
unsubscribe()