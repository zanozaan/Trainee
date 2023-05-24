import React, {useEffect, useState} from 'react'
import TableComp from '../Table/TableComp';
import axios from 'axios';
import { Form } from 'react-router-dom';
import InputComp from '../Input/InputComp'; 

function ApiComp() { 

    const [data, setdata] = useState([])
    const [inputs, setInputs] = useState({})
    const [postId, setPostId, apiPOST] = useState(null);

//GET METHOD
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response) => Response.json())
    .then((json) => setdata(json));
    }, []);

//POST METHOD
useEffect (() => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({title: inputs.title})
    };
    fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
        .then (response => response.json())
        .then (data => setPostId(data.id));
}, );

const handleChange=(event)=>{
    event.persist();
    setInputs((inputs) => ({
        ...inputs,

        [event.target.name]:event.target.value,
    }))
}

const handleSubmit=(event)=>{
    event.preventDefault();
    apiPOST();
    console.log(inputs);
};

const handleDelete=(event)=>{
    axios ('https://jsonplaceholder.typicode.com/posts/${id}').then(() => {
        fetch();
    })
}

  return (
         <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Action</th>
            </tr>
            
            {data.map((e, i) => (
                <tr key={i + 1}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.website}</td>
                    <td>
                        <form onSubmit={handleChange}>
                            <button className="update">Update</button>
                        </form>
                        <form onSubmit={handleDelete}>
                            <button className="delete">Delete</button>
                        </form>
                    </td>
                </tr>
            ))}
        </table> 
  );
}

export default ApiComp;