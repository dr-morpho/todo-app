import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type taskType = {
  id: string;
  text: string;
  clicked: boolean;
};

type todoType = {
  todos: taskType[];
  text: string;
};

const todoState: todoType = {
  todos: [],
  text: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: todoState,
  reducers: {
    createTodos(state, action: PayloadAction<taskType>) {
      state.todos.push(action.payload);
    },
    deleteTodos(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload);
    },
    doneTodos(state, action: PayloadAction<string>) {
      state.todos.map((elem) =>
        elem.id === action.payload ? (elem.clicked = !elem.clicked) : null,
      );
    },
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    clearText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
    clearAll(state, action: PayloadAction<[]>) {
      state.todos = action.payload;
    },
  },
});

export const todoSelector = (state: RootState) => state.todoSlice.todos;
export const textSelector = (state: RootState) => state.todoSlice.text;
export const { createTodos, setText, deleteTodos, doneTodos, clearText, clearAll } =
  todoSlice.actions;
export default todoSlice.reducer;
