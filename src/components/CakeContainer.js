import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

export const CakeContainer = (props) => {
  return (
    <div>
        <h2 className="">Number of cakes ={props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)