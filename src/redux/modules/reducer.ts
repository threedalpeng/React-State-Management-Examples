import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
import { TodosAction, TodosState } from "./types";

const initialState: TodosState = [
  {
    id: 1,
    text: "State Management 조사",
    done: true,
  },
  {
    id: 2,
    text: "Redux로 구현",
    done: false,
  },
];

// 리듀서 작성
function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
