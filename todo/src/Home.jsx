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
                    <div key={todo.id}>
                        {todo.task}
                    </div>
                ))
            }
        </div>
    )
}

export default Home  