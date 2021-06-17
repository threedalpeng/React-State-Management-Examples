import { atom } from "recoil";

// Todos State
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
type Todos = Todo[];

const initialTodos: Todos = [
  {
    id: 1,
    text: "State Management 조사",
    done: true,
  },
  {
    id: 2,
    text: "Recoil로 구현",
    done: false,
  },
];

export const todosState = atom<Todos>({
  key: "todosState",
  default: initialTodos,
});

/*
const todosCountState = selector<number>({
  key: "todosCountState",
  get: ({ get }) => {
    const todos = get(todosState);
    return todos.length;
  },
});

const completedTodosState = selector<Todos>({
  key: "completedTodosState",
  get: ({ get }) => {
    const todos = get(todosState);
    return todos.filter((todo) => todo.done);
  },
});
*/
