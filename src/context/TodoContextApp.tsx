import React from "react";
import { TodosProvider, useTodosDispatch, useTodosState } from "./TodoContext";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

function TodoApp() {
  const state = useTodosState();
  const dispatch = useTodosDispatch();

  const onInsert = (text: string) => {
    dispatch({ type: "ADD_TODO", text: text });
  };

  const onToggle = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", id: id });
  };

  const onRemove = (id: number) => {
    dispatch({ type: "REMOVE_TODO", id: id });
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={state} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

function TodoContextApp() {
  return (
    <TodosProvider>
      <TodoApp />
    </TodosProvider>
  );
}

export default TodoContextApp;
