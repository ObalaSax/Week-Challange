import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoList {
  id: number;
  todoTask: string;
}

interface TodoState {
  todoItems: TodoList[];
  nextTodoId: number;
}
const initialState: TodoState = {
  todoItems: [],
  nextTodoId: 0,
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: TodoList = {
        id: state.nextTodoId,
        todoTask: action.payload,
      };
      state.todoItems.push(newTask);
      state.nextTodoId++;
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.todoItems = state.todoItems.filter(
        (todo) => todo.id !== action.payload,
      );
    },
  },
});

export const { addTask, removeTask } = TodoSlice.actions;
export default TodoSlice.reducer;
