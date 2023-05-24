import React, { Component } from 'react'

class Soal2 extends Component{
    state ={
        data:[ 1,2,3,4,5,6,7,8,9,10 ]
    }
    render(){
        const result = this.state.data.map(( value, index ) => {
            return(<div key={ index }>{ value }</div>)
        })
        return(
            <div>
                <h1> Soal 2 </h1>
                        { result }
            </div>
        )
    }
}
export default Soal2;