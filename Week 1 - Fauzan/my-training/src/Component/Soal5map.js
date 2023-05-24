import React from 'react';

let Buah = ['Anggur', 'Delima', 'Manggis', 'Semangka'];
Buah.map((item) => {
    console.log(item);
})

function Soal5map(){
    return(
        <p>Ini Buah menggunakan map {Buah} </p>
    )
}

export default Soal5map;