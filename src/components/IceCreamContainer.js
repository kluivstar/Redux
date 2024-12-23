import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

export const IceCreamContainer = (props) => {
  return (
    <div>
        <h2 className="">Number of cakes ={props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    // added "iceCream" to be specific
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer)