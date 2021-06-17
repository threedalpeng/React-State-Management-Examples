import React, { createContext, Dispatch, useContext, useReducer } from "react";

// Todos State
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
type TodosState = Todo[];

const initialTodos: TodosState = [
  {
    id: 1,
    text: "State Management 조사",
    done: true,
  },
  {
    id: 2,
    text: "Context API로 구현",
    done: false,
  },
];

// Todos Action과 Dispatch
type TodosAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "REMOVE_TODO"; id: number };

type TodosDispatch = Dispatch<TodosAction>;

// Reducer
let nextId = 3;
function todosReducer(state: TodosState, action: TodosAction): TodosState {
  console.log(action.type);
  switch (action.type) {
    case "ADD_TODO":
      return state.concat({ id: nextId++, text: action.text, done: false });
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Unknown action");
  }
}

// Context
const TodosStateContext = createContext<TodosState>(initialTodos);
const TodosDispatchContext = createContext<TodosDispatch>(() => null);

// Provider
export function TodosProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosStateContext.Provider value={state}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosStateContext.Provider>
  );
}

// Custom Hooks
export function useTodosState(): TodosState {
  return useContext(TodosStateContext);
}

export function useTodosDispatch(): TodosDispatch {
  return useContext(TodosDispatchContext);
}
