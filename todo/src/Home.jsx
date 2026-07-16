import React, { useState } from "react";
import Create  from './Create.jsx'
import { useEffect } from "react";
import axios from "axios";

function Home() {
    const [todos ,setTodos] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/get")
        .then(result =>setTodos(result.data))
        .catch(err => console.log(err))
    },[])

    const handleEdit = (id) => {

         axios.put("http://localhost:5000/update/"+id)
          .then(() => {
            return axios.get("http://localhost:5000/get");
          })
        .then(result =>setTodos(result.data))
        .catch(err => console.log(err))

    }

    return (
        <div className="home">
            <h2>todo list</h2>
            <Create></Create>
            {
                todos.length === 0
                ?
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (
                    <div className="main" key={todo._id}>
                        <div>
                            <div>
                                <input type="checkbox" checked= {todo.done} onClick={() => handleEdit(todo._id)}/>
                            </div>
        
                            <div>{todo.task}</div>
                            <div>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home  