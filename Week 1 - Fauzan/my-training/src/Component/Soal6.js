import React from 'react';

const animals = ["ant","bison","camel","duck","elephant"];

const animals1 = animals.slice(2,5).join(' ');
const animals2 = animals.slice(2,4).join(' ');
const animals3 = animals.slice(1,5).join(' ');
const animals4 = animals.slice(3,5).join(' ');

// const animals = ["ant","bison","camel","duck","elephant"];
// const arry = (animals) => {
//   let potong1 = animals.slice(2,5).join(" ");
//   return `${potong1}`}
  
  function Soal6(){
  return (
    <div>
      <li>{(animals1)}</li>
      <li>{(animals2)}</li>
      <li>{(animals3)}</li>
      <li>{(animals4)}</li>
    </div>
  );
  
}
export default Soal6;