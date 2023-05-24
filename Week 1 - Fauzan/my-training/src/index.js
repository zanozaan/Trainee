import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Soal1 from './Component/Soal1';
// import Soal2 from './Component/Soal2';
// import Soal3AND from './Component/Soal3AND';
// import Soal3OR from './Component/Soal3OR';
// import Soal3NOT from './Component/Soal3NOT';
// import Soal5forEach from './Component/Soal5forEach';
// import Soal5map from './Component/Soal5map';
// import Soal6 from './Component/Soal6';
import Header from './Component/Soal7/Header';
import Main from './Component/Soal7/Main';
import Footer from './Component/Soal7/Footer';
import Grid from './Component/Soal7/Grid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Soal1 /> */}
    {/* <Soal2 /> */}
    {/* <Soal3AND /> */}
    {/* <Soal3OR /> */}
    {/* <Soal3NOT /> */}
    {/* <Soal5forEach /> */}
    {/* <Soal5map /> */}
    {/* <Soal6 /> */}
    <Header />
    <Main />
    <Grid />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
