import React, { useState } from 'react'


const ToDoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([])

    return (
        <div className="container col-6">
            <div className="container">

                <input className="form-control" type="text"
                    onChange={(e) => { setInputValue(e.target.value) }}
                    value={inputValue}
                    onKeyDown={(e) => {
                        e.key === "Enter"
                            ? setTodos(todos.push(inputValue))
                            : null
                    }
                    }
                    placeholder="Que necesitas Hacer?">
                    {console.log(inputValue)}
                    {console.log(todos)}
                </input>

                <ul className="list-group">

                    {todos.map((t) => (
                        <li className="list-group-item disabled" aria-disabled="true">{t}</li>
                    ))}
                    <li className="list-group-item">A item</li>

                </ul>
            </div>
        </div>

    )

}

export default ToDoList;