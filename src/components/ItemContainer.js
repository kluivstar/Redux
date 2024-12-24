import React from 'react'
import { connect } from 'react-redux'

const ItemContainer = (props) => {
  return (
    <h1>
        Item - {props.item}
    </h1>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams
    return {
        item: itemState
    }
}
export default connect(mapStateToProps)(ItemContainer)