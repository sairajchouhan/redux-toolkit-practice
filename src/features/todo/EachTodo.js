import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, doneTodo } from './todoSlice';

const EachTodo = ({ todo, id, done }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p
        style={
          done ? { textDecoration: 'line-through' } : { textDecoration: '' }
        }
      >
        {todo}
      </p>
      <button onClick={() => dispatch(doneTodo(id))}>Done</button>
      <button onClick={() => dispatch(removeTodo(id))}>Remove</button>
    </div>
  );
};

export default EachTodo;
