import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>Counter:{this.props.count}</h2>
        <button onClick={this.props.increment} style={this.props.estilo}>+</button>
        <button onClick={this.props.decrement} style={this.props.estilo}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
   return {
     count:state.count
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
      increment:() => dispatch(increment),
      decrement:() => dispatch(decrement),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

