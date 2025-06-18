import React, { useState } from 'react'

const Toto = () => {
    const [name, setName] = useState("")
    const [todo, setTodo] = useState([])

    const handleAdd = (e) => {
        e.preventDefault();
        if (name.trim()) {
            setTodo([...todo, name])
            setName("")
        }
    }

    const deleteTodo = (index) => {
        setTodo(todo.filter((_, i) => i !== index))
    }

    return (
        <>
            <div>
                <input
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder='Enter name'
                />
                <button onClick={handleAdd} type='submit'>Add</button>
            </div>

            <ul>
                {todo.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => deleteTodo(index)}>delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Toto
