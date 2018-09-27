import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Start from './Start'
import registerServiceWorker from './registerServiceWorker'

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import RootR from './store/reducers/RootR'

const store = createStore(
    RootR,
    compose( 
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

ReactDOM.render(
    <Provider store={store}>
        <Start />
    </ Provider>, document.getElementById('root'))
registerServiceWorker()
