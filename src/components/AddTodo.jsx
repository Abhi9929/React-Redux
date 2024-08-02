import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../feature/todo/todoSlice';

function AddTodo() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addToHandler = (e) => {
        e.preventDefault();
        if (text != null || text != '') {
            dispatch(addTodo());
        }
    }

  return (
    <form onSubmit={addToHandler}>
      <div>
        <label htmlFor='todoText'>Todo:</label>
        <input
          type='text'
          id='todoText'
          placeholder='Enter a Todo...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  );
}

export default AddTodo