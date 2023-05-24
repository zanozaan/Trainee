import React from 'react'
import input from 'react-bootstrap/InputGroup'
import './InputComp.css'

function InputComp() {
  return (
    <form>
    <div class="form-row">
      <div class="col-2">
        <input type="text" class="form-control" placeholder="Add name here..."/>
      </div>
      <div class="col-2">
        <input type="text" class="form-control" placeholder="Add email here..."/>
      </div>
      <div class="col-2">
        <input type="text" class="form-control" placeholder="Add website here..."/>
      </div>
      <div class="col-2">
        <input class="btn btn-primary" type="submit" value="Add user"/>
      </div>
      
    </div>
  </form>
  )
}

export default InputComp