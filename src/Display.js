import React, { Component } from 'react'
import { connect } from 'react-redux'

const Display = ({count }) => {
    return (
      <div>
        <h2>Counter:{count}</h2>
      </div>
    )
}

const mapStateToProps = ({ count }) => {
   return { count }
}

export default connect(mapStateToProps)(Display)

