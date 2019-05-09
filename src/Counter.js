import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions';

const Counter = ({count, estilo, increment, decrement }) => {
    return (
      <div>
        <h2>Counter:{count}</h2>
        <button onClick={() => increment(2)} style={estilo}>+</button>
        <button onClick={() => decrement(1)} style={estilo}>-</button>
      </div>
    )
}

const mapStateToProps = ({ count }) => {
   return { count }
}

const mapDispatchToProps = (dispatch) => {
    return {
      increment:(value) => dispatch(increment(value)),
      decrement:(value) => dispatch(decrement(value)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

