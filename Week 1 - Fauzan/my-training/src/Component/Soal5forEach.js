import React from 'react';

let Buah = ['Anggur', 'Delima', 'Manggis', 'Semangka'];

let returnOutput = Buah.forEach((item) => {
    return item;
})
console.log(returnOutput)

function Soal5forEach(){
    return(
        <p>Ini Buah menggunakan forEach {Buah} </p>
    )
}

export default Soal5forEach;