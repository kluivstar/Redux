import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

const ItemContainer = (props) => {
  return (
   <div class="">
     <h1>
        Item - {props.item}
    </h1>
    <button type="" class="" onClick={props.buyItem}>Buy Item</button>
   </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  // binds/maps state to component prop if prop(cake) is passed
  
    const itemState = ownProps.cake
    // if cake is passed number of cake is returned
    ? state.cake.numOfCakes
    // else
    : state.iceCream.numOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  const dispatchFunction = ownProps.cake
  // maps Redux dispatch actions to the component's props.
  // buyItem is now avaliable as a prop to this component
  ? () => dispatch(buyCake())
  : () => dispatch(buyIceCream())
  return {
    buyItem: dispatchFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)