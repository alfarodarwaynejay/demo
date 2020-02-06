import React from "react"
import ReactDOM from "react-dom"
import App from './containers/App'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { HashRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import { setInitialReducers } from './redux/reducers'

const appReducer = combineReducers({
	setInitialReducers
})

const loadState = () => {
	try {
		const serializedState = localStorage.getItem('reduxState')
		if (serializedState === null) return undefined
		return JSON.parse(serializedState)
	} catch (err) {
		console.log(err)
		return undefined
	}
}

const saveState = (store) => {
	try {
		const serializedState = JSON.stringify(store.getState())
		localStorage.setItem('reduxState', serializedState)
	} catch (err) {
		console.log(err)
	}
}

const logger = createLogger();

const persistedState = loadState();
const store = createStore(appReducer, persistedState, applyMiddleware(logger))
store.subscribe(() => { saveState(store) })

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById("index")
)
