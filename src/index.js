import React from "react"
import ReactDOM from "react-dom"
import App from './containers/App'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { HashRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import { setInitialReducers, initialState } from './redux/reducers'
import sagas from './redux/sagas'

const appReducer = combineReducers({
	setInitialReducers
})

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(appReducer,initialState, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById("index")
)
