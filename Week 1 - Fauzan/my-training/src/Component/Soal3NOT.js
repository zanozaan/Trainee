import React from 'react'

let huruf = 'a'
let angka = 1

const ukuran = () => {
  if(huruf !== angka){
    return `Tidak sama.`
  }
}
function Soal3NOT(){
  return (
    <div>
      <p>
        {ukuran(huruf, angka)}
      </p>
    </div>
  )
}

export default Soal3NOT;