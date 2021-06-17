import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { todosState } from "./Todos";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useRecoilState(todosState);

  let nextId = 2;
  const onInsert = (text: string) => {
    const newTodos = todos.concat({
      id: nextId++,
      text: text,
      done: false,
    });
    setTodos(newTodos);
  };

  const onToggle = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const onRemove = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

function TodoRecoilApp() {
  return (
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  );
}

export default TodoRecoilApp;
