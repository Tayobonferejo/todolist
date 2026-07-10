import React, { useState } from "react";
import Create  from './Create.jsx'

function Home() {
    const [todos ,setTodos] = useState([])
    return (
        <div>
            <h2>todo list</h2>
            <Create></Create>
            {
                todos.length === 0
                ?
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => {
                    <div>
                        {todo}
                    </div>
                })
            }
        </div>
    )
}

export default Home  