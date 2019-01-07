import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import Info from './Info'

const store = createStore(reducers)

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
