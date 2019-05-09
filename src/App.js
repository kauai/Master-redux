import React, { Component } from 'react'
import './App.css'
import Counter from './Counter'
import Display from './Display'
import { applyMiddleware, createStore } from 'redux'
import counterReducer from './reducer';
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const estilo = {
    fontSize:'30px',
    background:'purple',
    border:'none',
    color:'#fff'
}
let store = createStore(
  counterReducer,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //USAND
  applyMiddleware(logger)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Display/>
            <Counter estilo={estilo}/>
          </header>
        </div>
      </Provider>
    )
  }
}

export default App;
