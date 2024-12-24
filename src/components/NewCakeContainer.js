import React, { useState } from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

export const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    
  return (
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

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer)