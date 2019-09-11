import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux"
import App from './App';
import {createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunk from "redux-thunk"
import burgerBuilderReducer from "./Store/reducer/burgerBuilderReducer"
import { BrowserRouter } from "react-router-dom"
import orderReducer from './Store/reducer/orderReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    burgBuilder: burgerBuilderReducer,
    order: orderReducer
});


const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
const app=(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
