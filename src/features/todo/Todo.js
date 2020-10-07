import React, { useState } from 'react';
import { addTodo, selectTodo } from './todoSlice';
import { useSelector, useDispatch } from 'react-redux';
import EachTodo from './EachTodo';
import './Todo.css';
import { FaArrowCircleRight } from 'react-icons/fa';

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
        <div className="todo__input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="New Todo"
          />
          <div disabled={input.trim() === ''} onClick={handleClick}>
            <FaArrowCircleRight className="todo__send" />
          </div>
        </div>
        <div className="todo__list">
          {todos.map(({ todo, id, done }) => (
            <EachTodo todo={todo} key={id} id={id} done={done} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
