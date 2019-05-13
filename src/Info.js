import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadData,loadDataC } from './actions';
import loading from './giphy.gif'

class Info extends Component {

  state = {
    count:10,
    countLoading:false
  }

  componentDidMount(){
        this.props.loadData()
        this.props.loadDataC()
  }

  plus = () => {
    this.setState({countLoading:true})
      setTimeout(() => {
        this.setState({count:this.state.count + 5,countLoading:false})
      },2000)
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
                  <ul className="loading">
                      <li><h2>Lista de Usuarios</h2></li>
                      {this.props.users && this.props.users
                      .map(item => {
                          return <li className="loading" key={item.id + 1}>{item.name}</li>
                      })}
                    </ul>
                    <ul className="loading">
                      <li><h2>Lista de Comentarios</h2></li>
                      {this.props.comments && this.props.comments
                      .map(item => {
                          return <li className="loading" key={item.id}>{item.name}</li>
                      }).filter((item,key) => {
                        return key <= this.state.count
                      })
                      }
                      {this.state.countLoading && <img className="loading" src={loading}/>}
                      <button onClick={this.plus}>Mais</button>
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
