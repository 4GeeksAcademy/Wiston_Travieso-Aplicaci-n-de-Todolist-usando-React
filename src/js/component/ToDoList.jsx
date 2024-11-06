import React, { useState } from 'react'


const ToDoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([])

    function addTask(inputValue, e) {
        setTodos(todos.concat(inputValue))
        e.target.value = ""
    }
    function deleteTask(task, index) {
        setTodos(todos.filter((task, taskIndex) => index != taskIndex))

    }

    return (
        <div className="container col-6">
            <div className="container">

                <input className="form-control" type="text"
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                    //value={inputValue}
                    onKeyUp={(e) => {
                        e.key === "Enter"
                            ? addTask(inputValue, e)
                            : null
                    }
                    }
                    placeholder="Que necesitas Hacer?">

                </input>

                <ul className="list-group">

                    {todos.map((task, index) => (
                        <li className="list-group-item" key={index}
                        >{task}  <button type="button" class="btn btn-dark"
                            onClick={(e) =>
                                deleteTask(task, index)}
                        >X</button>

                        </li>
                    ))}
                    <div className="text-align-right">
                        {todos.length} item left
                    </div>
                </ul>
            </div>
        </div >

    )

}

export default ToDoList;