import React from 'react'

let tinggi = 50
let berat = 60

const ukuran = () => {
  if(tinggi === 50 && berat === 60){
    return `Anda boleh masuk.`
  }
}
function Soal3AND(){
  return (
    <div>
      <p>
        {ukuran(tinggi, berat)}
      </p>
    </div>
  )
}

export default Soal3AND;