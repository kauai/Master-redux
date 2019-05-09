import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions';

const Counter = ({count, estilo, increment, decrement }) => {
    return (
      <div>
        <h2>Counter:{count}</h2>
        <button onClick={increment} style={estilo}>+</button>
        <button onClick={decrement} style={estilo}>-</button>
      </div>
    )
}

const mapStateToProps = ({ count }) => {
   return { count }
}

const mapDispatchToProps = (dispatch) => {
    return {
      increment:() => dispatch(increment),
      decrement:() => dispatch(decrement),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

