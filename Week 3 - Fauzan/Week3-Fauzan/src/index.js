import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducerFunc from './Redux/Reducers/Reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar/Navbar';
import ApiComp from './components/API/ApiComp';
import InputComp from './components/Input/InputComp';
import GridComp from './components/Grid/GridComp';


const store = createStore(reducerFunc)
ReactDOM.render(
<Provider store={store} >
  {/* <Navbar /> */}
  {/* <App /> */}
  {/* <GridComp /> */}
  <ApiComp />
  <InputComp />
</Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();