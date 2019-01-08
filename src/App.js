import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import Info from './Info'

import createSagaMiddleware from 'redux-saga'
import axios from 'axios'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
  )



  function *ola(){
    console.log('Hello from saga')
    const dados = yield axios.get('http://httpbin.org/ip')
    console.log(dados)
  }

  sagaMiddleware.run(ola)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
        </div>
      </Provider>
      
    );
  }
}

export default App;
