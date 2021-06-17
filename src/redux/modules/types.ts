import * as actions from "./actions";

export type TodosAction =
  | ReturnType<typeof actions.addTodo>
  | ReturnType<typeof actions.toggleTodo>
  | ReturnType<typeof actions.removeTodo>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
