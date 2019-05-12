import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadData,loadDataC } from './actions';

class Info extends Component {

  componentDidMount(){
        this.props.loadData()
        this.props.loadDataC()
  }

  // li = () => {
  //   return this.props.comments && this.props.comments.filter((item,key) => {
  //     return <li>{item.body}</li>
  //   })
  // }

  render() {
     console.log('props',[this.props.users,this.props.comments])
    // return this.props.isFetching && <h1>Loading</h1> || <h1>Carregado</h1>
    //return <h1>teste</h1>  
    if(this.props.isFetching){
       return <h1>Loading</h1>
      }else if(this.props.error){
        return <h1>Error</h1>
      }else{
        return <div>
                  <ul>
                      <li><h2>Lista de Usuarios</h2></li>
                      {this.props.users && this.props.users
                      .map(item => {
                          return <li key={item.id + 1}>{item.name}</li>
                      })}
                    </ul>
                    <ul>
                      <li><h2>Lista de Comentarios</h2></li>
                      {this.props.comments && this.props.comments
                      .map(item => {
                          return <li key={item.id}>{item.name}</li>
                      })}
                    </ul>
                </div>
      }
  
  }
}

const mapStateToProps = (state) => {
   return {
       isFetching:state.isFetching,
       users:state.users.data,
       comments:state.comments.data,
       error:state.error
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadData:() => dispatch(loadData()),
      loadDataC:() => dispatch(loadDataC()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info)
