import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import  Reducer  from './reducers';
import { Provider } from 'react-redux'
import logger from 'redux-logger'
// import Info  from './Info';

let store = createStore(
  Reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
)

class App extends Component {
  render() {
    return (
       <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>teste</h1>
          </header>
        </div>
        </Provider>
    )
  }
}

export default App;
