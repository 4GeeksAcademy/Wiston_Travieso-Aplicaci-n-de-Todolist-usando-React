import React, { useState } from 'react'


const ToDoListFetch = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([])

   // useEffect(() => { getTodos() }, [])

    function addTodo(inputValue) {
        if (inputValue !== "") {
            let newTask = {
                label: inputValue,
                is_done: false
            }
            fetch("https://playground.4geeks.com/todo/todos/wiston_travieso", {
                method: "POST",
                body: JSON.stringify(newTask),
                headers: { "Content-Type": "application/json" }
            })
                .then((response) => {
                    response.json()
                })
                .then((data) => {
                    setTodos((prevTodos) => [...prevTodos, newTask]);
                console.log()
                })
                .catch((err) => { console.log(err) })
        }
    }
    function getTodos() {
        fetch("https://playground.4geeks.com/todo/users/wiston_travieso")
            .then((response) => {
                console.log(response.ok);
                console.log(response.status);
                console.log(response.text());
                return response.json()
            })
            .then(data => {
                setTodos(data.todos);
                console.log(data);
                
            })
            .catch((err) => { console.log(err) })
    }
    function Enter(e, todo) {
        if (e.key === "Enter") {
            e.preventDefault()
            addTodo(todo)
        }
    }
    getTodos()
    return (
        <div className="container col-6">
            <div className="container">

                <input className="form-control" type="text"
                    onChange={(e) => { setInputValue(e.target.value) }}
                    value={inputValue}
                    onKeyDown={(e) => Enter(e, todo)}
                    placeholder="Que necesitas Hacer?"></input>

                <ul className="list-group">

                    {todos.map((t) => (
                        <li className="list-group-item disabled" aria-disabled="true">{t}</li>
                    ))}
                    <li class="list-group-item">A second item</li>

                </ul>
            </div>
        </div>

    )

}

export default ToDoListFetch;