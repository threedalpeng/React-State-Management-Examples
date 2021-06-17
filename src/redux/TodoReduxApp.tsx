import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import rootReducer, { RootState } from "./RootReducer";
import { toggleTodo, removeTodo, addTodo } from "./modules";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import { createStore } from "redux";

const store = createStore(rootReducer);

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

function TodoReduxApp() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default TodoReduxApp;
