import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadData } from './actions';

class Info extends Component {
  // state = {
  //    isFetching:false
  // }

  componentDidMount(){
        //  this.setState({ isFetching: this.props.isFetching })
        this.props.loadData()
  }

  render() {
    // console.log(this.props)
    // return this.props.isFetching && <h1>Loading</h1> || <h1>Carregado</h1>
      if(this.props.isFetching){
       return <h1>Loading</h1>
      }else if(this.props.error){
        return <h1>Error</h1>
      }else{
        return <ul>
                   <li><h2>Lista de Usuarios</h2></li>
                  {this.props.data.map(item => {
                      return <li>{item.name}</li>
                  })}
             </ul>
      }
  
  }
}

const mapStateToProps = (state) => {
   return {
       isFetching:state.isFetching,
       data:state.data,
       error:state.error
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadData:() => dispatch(loadData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info)
