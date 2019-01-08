import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import Info from './Info'

import createSagaMiddleware from 'redux-saga'
import axios from 'axios'
import { put } from 'redux-saga/effects'
import { loadDataSuccess } from './actions';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
  )

  function *ola(){
    console.log('Hello from saga')
    const dados = yield axios.get('https://httpbin.org/ip')
    yield put(loadDataSuccess(dados.data.origin))
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
