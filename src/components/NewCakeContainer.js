import React, { useState } from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

export const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    
  return (
    // Displays the current number of cakes (props.numOfCakes).
    // Input field lets the user specify how many cakes to buy. The onChange event updates the number state.
    // The onClick event triggers the buyCake function with the specified number
    <div>
        <h2 className="">Number of cakes ={props.numOfCakes}</h2>
        <input type="text"  value={number} onChange={(e) => setNumber(e.target.value)} class=""/>
        <button onClick={props.buyCake(number)}>Buy Cakes</button>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    // added "cake" to be specific
    numOfCakes: state.cake.numOfCakes
  }
}
// PASS INPUT TO ACTION CREATOR THEN REDUCER THEN UPDATES STATE WITH NEW INPUT
// Binds the buyCake action creator to the component
// When buyCake is called with a number, it dispatches the action to the Redux store
const mapDispatchToProps = dispatch => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer)