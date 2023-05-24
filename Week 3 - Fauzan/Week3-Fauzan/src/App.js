import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import '././components/Grid/GridComp.css';
import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';

function App(props) {

  const handleInc = (evt) => {
    props.dispatch({
      type: 'INCREMENT'
    })
  }

  const handleDec = (evt) => {
    props.dispatch({
      type: 'DECREMENT'
    })
 }

  const handleIncH = (evt) => {
    props.dispatch({
      type: 'INCREMENTH', newHarga:12000
    })
  }

  console.log(props.dispatch)
    return (
      <div className='container'>
       <img src='https://images.tokopedia.net/img/cache/700/hDjmkQ/2021/5/7/593e19d1-93f9-482d-abba-0182023015c2.jpg'/>
       <div className="div-article">
         <div className='Harga'>Total:</div>
          <p>Harga Rp : {props.harga}</p>
           <div className="onclick">
            <div><button onClick={handleInc}><IoIosAddCircle onClick={handleIncH}/></button></div> 
            <div>{props.count}</div>
            <div><button onClick={handleDec}><IoIosRemoveCircle/></button></div>
            </div>
            <button type="button" class="button">Beli</button>
          </div>
         </div>
    );
  }

  const mapStateToProps = (state) => {
    return {
      count: state.count,
      harga: state.harga
    }
  }


  export default connect(mapStateToProps)(App);