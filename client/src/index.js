import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducers/rootreducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
window.store = store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
  document.getElementById('root')
);

