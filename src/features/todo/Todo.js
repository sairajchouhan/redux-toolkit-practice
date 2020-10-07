import React, { useState } from 'react';
import { addTodo, selectTodo } from './todoSlice';
import { useSelector, useDispatch } from 'react-redux';
import EachTodo from './EachTodo';
import './Todo.css';

const genetrateId = () => {
  return Math.ceil(Math.random() * 1000000);
};

const Todo = () => {
  const todos = useSelector(selectTodo);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addTodo({ todo: input, id: genetrateId(), done: false }));
    setInput('');
  };
  return (
    <div className="todo">
      <div className="todo_container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={input.trim() === ''} onClick={handleClick}>
          add
        </button>
        {todos.map(({ todo, id, done }) => (
          <EachTodo todo={todo} key={id} id={id} done={done} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
