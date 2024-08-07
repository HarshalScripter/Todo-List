import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() === "") {
            setError("Please fill in a task.");
            return;
        }
        addTodo(value);
        setValue("");
        setError("");
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='todo-input' 
                value={value}
                placeholder='What is the task today?' 
                onChange={(e) => setValue(e.target.value)}
            />
            {error && <p className='error-message'>{error}</p>}
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
};
