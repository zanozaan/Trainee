import React from 'react'

let x = prompt( "Masukkan Umur Anda: " )
let nilai = parseInt( x );


function kondisi( nilai ) {
    if ( nilai >= 20 ) {
    return  ( "Qualifies for driving" )}
    else if ( nilai < 20 ); {
    return  ( "Does not qualify for driving" )}}
  
  function Soal1(){
    return (
     <p>You, { kondisi( nilai ) }</p>
    )
  }
  export default Soal1;