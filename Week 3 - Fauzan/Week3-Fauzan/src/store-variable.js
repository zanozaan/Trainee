import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux' // ADDED CODE
import { Provider } from 'react-redux' // ADDED CODE
import reducerFunc from './Redux/reducers' // ADDED CODE
import App from './App';
import * as serviceWorker from './serviceWorker';
const store = createStore(reducerFunc)
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));