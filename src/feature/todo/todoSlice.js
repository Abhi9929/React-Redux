import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Hello World' }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo: (state, action) => {
    //   // find the todo
    //   const reqiuredTodo = state.todos.find(
    //     (todo) => todo.id == action.payload.id
    //   );
    //   state.todos = state.todos.map((todo) => {
    //     if (todo.id == reqiuredTodo.id) {
    //       todo.text = action.payload.text;
    //     }
    //     return todo;
    //   });
    // },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload.id ? (todo = action.payload) : todo
      );
    },
  },
});

// Export action creators to use in components for dispatching actions
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export the reducer to register it in the store
export default todoSlice.reducer;