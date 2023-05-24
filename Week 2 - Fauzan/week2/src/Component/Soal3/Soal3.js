import React from 'react'

function Soal3() {
  return (
    <form>
        <div className='form-group'>
            <label for='inputname'> Input Nama Anda </label>
            <input type="text" className='form-control' id='InputName'  placeholder='Enter Nama'></input>
        </div>
        <div className='form-group'>
            <label for='inputAge'> Input Umur Anda </label>
            <input type="number" className='form-control' id='inputAge'  placeholder='Enter Umur'></input>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default Soal3