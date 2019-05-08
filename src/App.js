import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter'
import { createStore } from 'redux'
import counterReducer from './reducer';
import { Provider } from 'react-redux'

const estilo = {
    fontSize:'30px',
    background:'purple',
    border:'none',
    color:'#fff'
}

let store = createStore(counterReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Counter estilo={estilo}/>
          </header>
        </div>
      </Provider>
    )
  }
}

export default App;
