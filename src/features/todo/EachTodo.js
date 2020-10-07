import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, doneTodo } from './todoSlice';
import './Todo.css';
import { FaCheck } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';

const EachTodo = ({ todo, id, done }) => {
  const dispatch = useDispatch();
  return (
    <div className="eachTodo">
      <p
        style={
          done ? { textDecoration: 'line-through' } : { textDecoration: '' }
        }
      >
        {todo}
      </p>
      <div className="eachTodo__btns">
        <div onClick={() => dispatch(doneTodo(id))}>
          <FaCheck className="eachTodo__icon" />
        </div>
        <div onClick={() => dispatch(removeTodo(id))}>
          <FaRegTrashAlt className="eachTodo__icon" />
        </div>
      </div>
    </div>
  );
};

export default EachTodo;
