import React, { useState } from 'react';
import './App.css'

function useTodos() {
    const [todos, setTodos] = useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/todos', {
            method: 'GET'
        }).then((response) => {
            response.json().then((data) => {
                setTodos(data);
            })
        });

        setInterval(() => {
            fetch('http://localhost:3000/todos', {
                method: 'GET'
            }).then((response) => {
                response.json().then((data) => {
                    setTodos(data);
                })
            });
        }, 1000);
    }, []);

    return todos;
}

function App() {
    const todos = useTodos();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const changeTitle = (event) => {
        setTitle(event.target.value)
    }

    const changeDescription = (event) => {
        setDescription(event.target.value)
    }

    return (
        <>
            <div>
                <input type="text" value={title} onChange={changeTitle} placeholder="Title" />
                <br></br>
                <br></br>
                <input type="text" value={description} onChange={changeDescription} placeholder="Description" />
                <br></br>
                <br></br>
                <AddTodo title={title} description={description} />
                <br></br>
                <br></br>
            </div >
            {
                todos.map((todo) => {
                    return (
                        <Todo id={todo.id} title={todo.title} description={todo.description} />
                    )
                })
            }
        </>
    )
}

function Todo(props) {
    return (
        <div>
            <span>{props.title}</span>
            <span> - </span>
            <span>{props.description}</span>
            <span> - </span>
            <button onClick={
                () => {
                    fetch(`http://localhost:3000/todos/${props.id}`, {
                        method: "DELETE"
                    }).then((result) => {
                        console.log(result);
                    });
                }
            }>Delete</button>
            <br></br>
            <br></br>
        </div>
    )
}

function AddTodo(props) {
    return (
        <button onClick={
            () => {
                fetch("http://localhost:3000/todos", {
                    method: "POST",
                    body: JSON.stringify({
                        title: props.title,
                        description: props.description,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((result) => {
                    result.json().then((text) => {
                        console.log(text);
                    });
                });
            }
        }> Add </button>
    )
}

export default App
