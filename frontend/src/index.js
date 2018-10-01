import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import RootR from './store/reducers/RootR'

const store = createStore(
    RootR,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </ Provider>, document.getElementById('root'))
registerServiceWorker()
